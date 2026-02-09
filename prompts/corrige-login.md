# Prompt para Correções de Autenticação Supabase

```markdown
# Aplicar Correções Críticas na Implementação de Autenticação Supabase

## Contexto

Projeto Next.js 14+ com TypeScript e Supabase Auth já implementado, mas faltando componentes críticos para funcionamento correto da autenticação. Baseado na análise do walkthrough, precisamos aplicar correções essenciais para garantir:

1. Refresh automático de tokens
2. Proteção adequada de rotas
3. Tratamento correto de erros
4. Gerenciamento de cookies em Server Components

## Stack Tecnológica

- Next.js 14+ (App Router)
- TypeScript
- Supabase (@supabase/ssr)
- shadcn/ui
- Sonner (toast notifications)

## Credenciais (já configuradas)

```env
NEXT_PUBLIC_SUPABASE_URL=https://onmvdcngo1scgvbjgcgh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[já configurada]
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Correções a Aplicar

### 🚨 CRÍTICO 1: Criar Middleware Global

**Problema:** Sem middleware, tokens Supabase não fazem refresh automático, causando logout após 1 hora.

**Arquivo:** `middleware.ts` **(na raiz do projeto, não em src/)**

**Ação:** Criar o arquivo com o seguinte conteúdo:

```typescript
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANTE: Isso dispara o refresh de token automaticamente
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Proteger rotas que começam com /dashboard, /profile, /settings
  const protectedPaths = ['/dashboard', '/profile', '/settings']
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (!user && isProtectedPath) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Redirecionar para dashboard se já autenticado tentando acessar login/signup
  const authPaths = ['/login', '/signup']
  const isAuthPath = authPaths.some(path => 
    request.nextUrl.pathname === path
  )

  if (user && isAuthPath) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - images, svgs, etc
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
```

**Localização:** `middleware.ts` na raiz (mesmo nível que `package.json`)

---

### ⚠️ CRÍTICO 2: Corrigir Server Client com Try/Catch

**Problema:** `server.ts` pode quebrar em Server Components ao tentar setar cookies.

**Arquivo:** `src/lib/supabase/server.ts`

**Ação:** Substituir o conteúdo completo por:

```typescript
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // Em Server Components, set() pode falhar
            // O middleware vai lidar com a atualização dos cookies
          }
        },
      },
    }
  )
}
```

---

### ⚠️ CRÍTICO 3: Adicionar 'use server' em Actions

**Problema:** Server Actions precisam da diretiva 'use server' no topo.

**Arquivo:** `src/app/(auth)/login/actions.ts`

**Ação:** Garantir que o arquivo tenha 'use server' na primeira linha e esteja completo:

```typescript
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function emailLogin(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function googleLogin() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  if (data.url) {
    redirect(data.url)
  }
}

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  
  if (error) {
    console.error('Sign out error:', error)
  }
  
  revalidatePath('/', 'layout')
  redirect('/login')
}
```

---

### ⚠️ CORREÇÃO 4: Melhorar Callback Handler

**Problema:** Callback não trata adequadamente erros e casos edge.

**Arquivo:** `src/app/auth/callback/route.ts`

**Ação:** Substituir completamente por:

```typescript
import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/dashboard'
  const origin = requestUrl.origin

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Sucesso - redirecionar para o destino
      return NextResponse.redirect(`${origin}${next}`)
    }

    // Erro ao trocar code por session
    console.error('OAuth callback error:', error)
    return NextResponse.redirect(`${origin}/login?error=oauth_error`)
  }

  // Sem code - redirecionar para login
  return NextResponse.redirect(`${origin}/login?error=no_code`)
}
```

---

### ⚠️ CORREÇÃO 5: Garantir Proteção no Layout

**Problema:** Layout protegido pode não estar verificando autenticação.

**Arquivo:** `src/app/(protected)/layout.tsx`

**Ação:** Criar ou substituir por:

```typescript
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return <>{children}</>
}
```

---

### ⚠️ CORREÇÃO 6: Login Page com Redirect

**Problema:** Página de login pode não redirecionar usuários já autenticados.

**Arquivo:** `src/app/(auth)/login/page.tsx`

**Ação:** Garantir que tenha verificação de autenticação:

```typescript
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/components/auth/login-form'

export default async function LoginPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Se já está autenticado, redirecionar para dashboard
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/50">
      <LoginForm />
    </div>
  )
}
```

---

### 📦 CORREÇÃO 7: Instalar e Configurar Sonner

**Problema:** Toast notifications podem não estar configuradas.

**Ações:**

1. **Instalar Sonner:**
```bash
npx shadcn@latest add sonner
```

2. **Adicionar ao Root Layout (`src/app/layout.tsx`):**

```typescript
import { Toaster } from '@/components/ui/sonner'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
```

3. **Atualizar LoginForm para usar toast (`src/components/auth/login-form.tsx`):**

Adicionar imports:
```typescript
import { toast } from 'sonner'
```

No `onSubmit`:
```typescript
const onSubmit = async (values: LoginFormValues) => {
  try {
    setIsLoading(true)
    const formData = new FormData()
    formData.append('email', values.email)
    formData.append('password', values.password)

    const result = await emailLogin(formData)

    if (result?.error) {
      toast.error('Erro ao fazer login', {
        description: result.error,
      })
    }
  } catch (error) {
    toast.error('Erro ao fazer login', {
      description: 'Ocorreu um erro inesperado. Tente novamente.',
    })
  } finally {
    setIsLoading(false)
  }
}
```

Para Google OAuth:
```typescript
const handleGoogleLogin = async () => {
  try {
    await googleLogin()
  } catch (error) {
    toast.error('Erro ao fazer login com Google', {
      description: 'Não foi possível conectar com o Google.',
    })
  }
}
```

---

### ✅ CORREÇÃO 8: Validar Dashboard

**Arquivo:** `src/app/(protected)/dashboard/page.tsx`

**Ação:** Garantir que está obtendo e usando dados do usuário:

```typescript
import { createClient } from '@/lib/supabase/server'
import { UserNav } from '@/components/user-nav'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Esse check é redundante por causa do layout, mas é bom ter
  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          <UserNav user={user} />
        </div>
      </header>

      <main className="flex-1 p-6">
        <div className="space-y-4">
          <h2 className="text-xl">Bem-vindo, {user.email}</h2>
          <p className="text-muted-foreground">
            Sua aplicação está funcionando corretamente!
          </p>
        </div>
      </main>
    </div>
  )
}
```

---

## Checklist de Implementação

Após aplicar as correções, verificar:

- [ ] `middleware.ts` criado na raiz do projeto (fora de src/)
- [ ] `src/lib/supabase/server.ts` tem try/catch em setAll
- [ ] `src/app/(auth)/login/actions.ts` tem 'use server' na primeira linha
- [ ] `src/app/auth/callback/route.ts` trata erros adequadamente
- [ ] `src/app/(protected)/layout.tsx` verifica autenticação
- [ ] `src/app/(auth)/login/page.tsx` redireciona se já autenticado
- [ ] Sonner instalado e configurado no root layout
- [ ] Toast notifications funcionando no login form
- [ ] Dashboard mostra dados do usuário

---

## Testes de Validação

Execute estes testes após aplicar as correções:

### 1. Teste de Middleware
```bash
# Inicie o servidor
npm run dev

# Acesse no navegador
http://localhost:3000/dashboard
# Deve redirecionar para /login se não autenticado
```

### 2. Teste de Login
```bash
# Tente fazer login com credenciais válidas
# Deve redirecionar para /dashboard
# Deve mostrar toast de sucesso ou erro conforme caso
```

### 3. Teste de Refresh de Token
```bash
# Faça login
# Deixe a página aberta por 5 minutos
# Navegue entre páginas
# Não deve deslogar (middleware renova o token)
```

### 4. Teste de Proteção de Rotas
```bash
# Tente acessar /dashboard sem estar logado
# Deve redirecionar para /login

# Faça login e tente acessar /login
# Deve redirecionar para /dashboard
```

### 5. Teste de Logout
```bash
# No dashboard, clique no avatar
# Clique em "Sair"
# Deve redirecionar para /login
# Tentando acessar /dashboard deve redirecionar para /login
```

---

## Estrutura de Arquivos Final Esperada

```
projeto/
├── middleware.ts                          ← NOVO/ATUALIZADO
├── src/
│   ├── app/
│   │   ├── layout.tsx                     ← ATUALIZADO (Toaster)
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   └── login/
│   │   │       ├── page.tsx               ← ATUALIZADO
│   │   │       └── actions.ts             ← ATUALIZADO
│   │   ├── (protected)/
│   │   │   ├── layout.tsx                 ← ATUALIZADO
│   │   │   └── dashboard/
│   │   │       └── page.tsx               ← ATUALIZADO
│   │   └── auth/
│   │       └── callback/
│   │           └── route.ts               ← ATUALIZADO
│   ├── components/
│   │   ├── auth/
│   │   │   └── login-form.tsx             ← ATUALIZADO (toast)
│   │   ├── user-nav.tsx
│   │   └── ui/
│   │       └── sonner.tsx                 ← NOVO (shadcn)
│   └── lib/
│       └── supabase/
│           ├── client.ts
│           └── server.ts                  ← ATUALIZADO
└── package.json
```

---

## Notas Importantes

1. **Middleware na Raiz:** O `middleware.ts` DEVE estar na raiz do projeto (ao lado de `package.json`), NÃO dentro de `src/`

2. **Ordem de Execução:**
   - Middleware executa PRIMEIRO (refresh de token)
   - Layout executa SEGUNDO (verificação de auth)
   - Page executa POR ÚLTIMO (renderização)

3. **Cookies:** O try/catch em `server.ts` é essencial porque Server Components não podem setar cookies diretamente - o middleware faz isso.

4. **Redirects:** Todos os redirects devem usar `redirect()` do Next.js, não `NextResponse.redirect()` em Server Components.

5. **Toast:** Use Sonner para feedback visual consistente.

---

## Resultado Esperado

Após todas as correções:

✅ Tokens fazem refresh automático (usuário não desloga)
✅ Rotas protegidas redirecionam para login
✅ Usuários autenticados não acessam /login
✅ Erros são tratados com toasts
✅ OAuth funciona corretamente
✅ Logout limpa sessão e redireciona

---

**IMPLEMENTE TODAS AS CORREÇÕES ACIMA NA ORDEM APRESENTADA. TESTE CADA CORREÇÃO ANTES DE PROSSEGUIR PARA A PRÓXIMA.**
```

# Revisão Completa: Autenticação e Estrutura do Projeto Smart Flow Nutrition

## Contexto
Este é um projeto SaaS Next.js 16 (App Router) com React 19, TypeScript, Supabase Auth + PostgreSQL, Prisma ORM e shadcn/ui. O app é um sistema de gestão para nutricionistas (pt-BR).

## O que preciso que você revise

### 1. Segurança da Autenticação
Revise todos os arquivos de auth e aponte vulnerabilidades:

- **`middleware.ts`** — Validar se o middleware cobre todas as rotas protegidas corretamente, se o refresh de token está seguro, e se não há bypass possível
- **`src/lib/supabase/server.ts`** — Verificar se o server client está criado corretamente com cookie handling seguro
- **`src/lib/supabase/client.ts`** — Verificar se o browser client não expõe nada sensível
- **`src/app/(auth)/login/actions.ts`** — Verificar se as Server Actions (emailLogin, googleLogin, signOut) têm validação adequada de input e tratamento de erros seguro
- **`src/app/auth/callback/route.ts`** — Verificar se o OAuth callback é seguro contra CSRF e redirect attacks
- **`src/app/auth/confirm/route.ts`** — Verificar se a verificação OTP/email está correta e segura
- **`src/components/user-nav.tsx`** — Verificar se o signOut client-side está correto vs o signOut server-side em actions.ts (há duplicidade)

### 2. Problemas de Código
Analise bugs e problemas técnicos:

- **`src/components/auth/login-form.tsx`** — O bloco `finally` referencia `error` fora do escopo do `catch`. Isso é um bug. Identifique e proponha correção
- **`src/components/auth/forgot-password-form.tsx`** — Há `console.log` de debug expondo informações sobre env vars. Avaliar se deve ser removido
- Verificar se há race conditions no fluxo de reset de password
- Verificar se os redirects após auth actions estão consistentes

### 3. Estrutura do Projeto
Avalie a arquitetura:

- O uso de route groups `(auth)` e `(protected)` está correto?
- A separação entre `src/app/auth/` (API routes) e `src/app/(auth)/` (pages) faz sentido?
- O protected layout faz `getUser()` redundante com o middleware — isso é intencional (defense in depth) ou overhead desnecessário?
- O reset-password está em `src/app/auth/reset-password/` (fora do grupo protected) mas é protegido pelo middleware — está consistente?
- Prisma + Supabase: o projeto tem ambos configurados. Qual é a estratégia? Supabase para auth e Prisma para dados de negócio? Isso está claro na estrutura?

### 4. Boas Práticas Next.js + Supabase
Verifique aderência aos padrões recomendados:

- O pattern de criação do Supabase client (server/client/middleware) segue a documentação oficial do @supabase/ssr?
- O middleware matcher pattern está otimizado?
- As Server Actions estão usando `revalidatePath` corretamente?
- O `searchParams` como `Promise` no login page está correto para Next.js 16?

### 5. Pontos de Melhoria
Sugira melhorias priorizadas (crítico > importante > nice-to-have):

- Segurança (CSRF, XSS, session fixation, etc.)
- Tratamento de erros (error boundaries, fallbacks)
- Performance (chamadas desnecessárias ao Supabase)
- UX (loading states, error states, edge cases)
- Tipagem TypeScript (types do Supabase, Database types)

## Formato da Resposta
Para cada item revisado, use:
- **Status**: OK / BUG / VULNERABILIDADE / MELHORIA
- **Severidade**: Crítico / Alto / Médio / Baixo
- **Arquivo**: caminho do arquivo
- **Descrição**: o que encontrou
- **Correção**: código ou abordagem sugerida

Ao final, forneça um resumo com score geral e os top 5 itens para corrigir primeiro.
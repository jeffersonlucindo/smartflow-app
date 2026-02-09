# Prompt Adaptado: Page Development com Supabase Auth

Build a [PAGE NAME] page based on the provided design/screenshot with Supabase authentication integration.

## Input

[SCREENSHOT OR FIGMA URL]

## Workflow

### 1. Analyze the Design Visually

Look at the image and identify:

**Layout Structure:**
- How many main sections/columns?
- Is there a sidebar? Header? Footer?
- What's the grid structure? (1-column, 2-column, 3-column)
- Container widths and spacing patterns

**UI Sections:**
- Break down the page into logical sections (top to bottom, left to right)
- Name each section by its purpose (e.g., "Sidebar Navigation", "Task List", "Chat Panel")

**Content Hierarchy:**
- What are the primary headings?
- What's the main content vs. supporting content?
- What are the call-to-action elements?

**🔐 Authentication Requirements:**
- **Is this a public or protected page?**
- Does it show user-specific data?
- Are there user actions (profile, logout, settings)?
- Does it need user context (name, avatar, email)?

### 2. Map Visual Elements to shadcn Components

For each UI element identified, map it to a shadcn component:

| Visual Element | shadcn Component | Notes |
|----------------|------------------|-------|
| Navigation sidebar | Sidebar | Use sidebar components |
| Tabs/segmented control | Tabs | For section switching |
| Cards with content | Card | CardHeader, CardContent, CardFooter |
| List of items | Card or Table | Depending on complexity |
| Buttons | Button | Note variant: default, outline, ghost |
| Form inputs | Input, Textarea | With Label |
| Dropdowns | Select or DropdownMenu | |
| Badges/tags | Badge | For status indicators |
| Icons | lucide-react icons | |
| Modal/dialog | Dialog | For overlays |
| Toast/notification | Toast or Sonner | For feedback |
| Avatar/profile image | Avatar | **+ User data from Supabase** |
| Progress indicator | Progress | |
| Checkbox/toggle | Checkbox or Switch | |
| **User menu/dropdown** | **DropdownMenu** | **Profile, Settings, Logout** |
| **Login form** | **Form + Input** | **Email/Password fields** |
| **OAuth buttons** | **Button** | **Google/GitHub login** |

Use shadcn MCP to verify components exist:
- `search_items_in_registries` for each component type
- `get_add_command_for_items` to get install commands

**IMPORTANT:** PRIORITIZE IMPORTING EXISTING COMPONENTS FROM DESIGN SYSTEM OVER CREATING NEW ONES.

### 3. Define Page Protection Level

**Determine page type:**

```typescript
// ✅ Public Page (não requer autenticação)
// app/(public)/landing/page.tsx
// app/(public)/about/page.tsx
// app/(auth)/login/page.tsx
// app/(auth)/signup/page.tsx

// 🔒 Protected Page (requer autenticação)
// app/(protected)/dashboard/page.tsx
// app/(protected)/profile/page.tsx
// app/(protected)/settings/page.tsx

// 🔀 Hybrid Page (funciona para ambos, conteúdo diferente)
// app/pricing/page.tsx (mostra botão "Login" ou "Dashboard")
```

### 4. Define Page Sections

Create a section breakdown:

```
Page: [PAGE NAME] (🔒 Protected / ✅ Public)
├── Header
│   ├── Logo/Brand
│   ├── Navigation tabs
│   └── User actions (Avatar + Dropdown) ← 🔐 AUTH
├── Sidebar (if present)
│   ├── Navigation items
│   ├── User info panel ← 🔐 AUTH
│   └── ...
├── Main Content
│   ├── Section 1: [name]
│   ├── Section 2: [name]
│   └── ...
└── Footer (if present)
```

### 5. Install Required Components

Based on the mapping, install all needed shadcn components:

```bash
npx shadcn@latest add [component1] [component2] [component3] ...

# Para páginas com autenticação, adicione:
npx shadcn@latest add avatar dropdown-menu form
```

### 6. Build Page Structure

#### 🔒 For Protected Pages:

Create `/app/(protected)/[page-name]/page.tsx`:

```tsx
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"

export default async function PageName() {
  const supabase = await createClient()
  
  // Verificar autenticação
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar if present */}
      <aside className="w-64 border-r bg-sidebar">
        {/* Sidebar content */}
        <div className="p-4">
          {/* User info */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar>
              <AvatarFallback>
                {user.email?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{user.email}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Header */}
        <header className="border-b p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">[Page Title]</h1>
          <UserNav user={user} />
        </header>

        {/* Page content */}
        <div className="p-6">
          {/* Sections usando dados do user se necessário */}
        </div>
      </main>
    </div>
  )
}
```

#### ✅ For Public Pages:

Create `/app/(public)/[page-name]/page.tsx`:

```tsx
import { createClient } from '@/lib/supabase/server'
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default async function PageName() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">[Page Title]</h1>
        {user ? (
          <UserNav user={user} />
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Criar conta</Link>
            </Button>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="p-6">
        {/* Sections */}
      </main>
    </div>
  )
}
```

#### 🔐 For Auth Pages (Login/Signup):

Create `/app/(auth)/login/page.tsx`:

```tsx
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/components/auth/login-form'

export default async function LoginPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  // Se já está logado, redirecionar
  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LoginForm />
    </div>
  )
}
```

### 7. Create User Navigation Component

Create `/components/user-nav.tsx`:

```tsx
'use client'

import { User } from '@supabase/supabase-js'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { LogOut, Settings, User as UserIcon } from 'lucide-react'

interface UserNavProps {
  user: User
}

export function UserNav({ user }: UserNavProps) {
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarFallback>
              {user.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Conta</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('/profile')}>
          <UserIcon className="mr-2 h-4 w-4" />
          Perfil
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/settings')}>
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

### 8. Apply Styling

Use Tailwind classes that reference your CSS variables:
- Backgrounds: `bg-background`, `bg-card`, `bg-muted`, `bg-sidebar`
- Text: `text-foreground`, `text-muted-foreground`
- Borders: `border-border`
- Spacing: Use Tailwind's spacing scale (`p-4`, `gap-6`, `space-y-4`)

### 9. Responsive Behavior

Define how the layout adapts:
- **Mobile (< 768px):** Sidebar collapses, single column
- **Tablet (768px - 1024px):** Sidebar as overlay or mini
- **Desktop (> 1024px):** Full layout as designed

```tsx
<div className="flex flex-col md:flex-row">
  <aside className="hidden md:block md:w-64">
    {/* Sidebar - hidden on mobile */}
  </aside>
  <main className="flex-1">
    {/* Main content */}
  </main>
</div>
```

### 10. Add Interactivity

Implement:
- Navigation/routing between pages
- State for tabs, toggles, selections
- Form handling if applicable
- Loading and error states
- **🔐 Auth state changes (login/logout)**
- **🔐 Protected actions requiring authentication**

### 11. Add Page Metadata

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description for SEO',
}
```

### 12. Data Fetching (if needed)

For pages that need user-specific data from Supabase:

```tsx
export default async function PageName() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }

  // Fetch user-specific data
  const { data: userProjects } = await supabase
    .from('projects')
    .select('*')
    .eq('user_id', user.id)

  return (
    <div>
      {/* Render with userProjects */}
    </div>
  )
}
```

## Output

- List of identified sections and components
- **Authentication level determined (Public/Protected/Auth)**
- All required shadcn components installed
- Page created at appropriate route group:
  - `app/(public)/[page-name]/page.tsx`
  - `app/(protected)/[page-name]/page.tsx`
  - `app/(auth)/[page-name]/page.tsx`
- **User authentication check implemented**
- **User navigation component integrated**
- Responsive layout matching the design
- Interactive elements working
- **Protected routes redirecting correctly**

---

## Example Analysis

For a screenshot showing a project management dashboard (Protected):

**🔒 Page Type:** Protected (requires authentication)

**Identified Sections:**
1. Left Sidebar - Navigation, project info, **user profile**
2. Center Panel - Chat/conversation view with task cards
3. Right Panel - Task list with actions
4. **Header with user avatar and dropdown**

**Component Mapping:**

| Element | Component | Auth Context |
|---------|-----------|--------------|
| Sidebar | Sidebar | |
| **User info panel** | **Avatar + user.email** | **✅ Needs user** |
| Project dropdown | Select | Filter by user's projects |
| Chat messages | Card | |
| Task cards | Card with CardHeader, CardContent, CardFooter | |
| "Approve Plan" button | Button (variant: default) | |
| "Edit Plan" button | Button (variant: outline) | |
| Task list items | Card or custom list item | |
| "View Plan" links | Button (variant: ghost) | |
| Status badges | Badge | |
| Tabs (Preview/Plan/Code) | Tabs | |
| **User avatar (header)** | **Avatar + DropdownMenu** | **✅ Needs user** |
| Input field | Input or Textarea | |
| **Logout action** | **DropdownMenuItem** | **✅ Auth action** |

**Install Command:**

```bash
npx shadcn@latest add sidebar card button badge tabs avatar input select dropdown-menu
```

**Page Structure:**

```
app/
└── (protected)/
    └── dashboard/
        └── page.tsx  ← Server Component with auth check
components/
└── user-nav.tsx      ← Client Component for user dropdown
```

---

## 🔐 Authentication Checklist

Before building the page, verify:

- [ ] Is this page public or protected?
- [ ] Does it need user data from Supabase?
- [ ] Does it have user actions (profile, settings, logout)?
- [ ] Is `createClient` from server or client imported correctly?
- [ ] Are redirects set up for unauthorized access?
- [ ] Is the user object typed correctly (`User` from `@supabase/supabase-js`)?
- [ ] Are auth state changes handled (login/logout)?
- [ ] Is the UserNav component created and imported?

---

## Notes

- **Works with any image** - rough Figma designs, screenshots, or mockups
- **Visual analysis first** - identify patterns before mapping to components
- **Use shadcn MCP** to verify components exist and get install commands
- **CSS variables** for all colors (defined in `globals.css`)
- **Mobile-first** - consider responsive behavior from the start
- **Import from design system** - prioritize importing components from design system over creating new ones
- **🔐 Auth-first** - determine authentication requirements before building
- **Server Components by default** - use Client Components only when needed (forms, interactivity)
- **Type-safe auth** - always type user objects correctly with Supabase types

---

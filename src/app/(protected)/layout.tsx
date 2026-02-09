import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export default async function ProtectedLayout({ children }: { children: ReactNode }) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Camada adicional de proteção (mesmo com middleware)
    if (!user) {
        redirect('/login')
    }

    return <>{children}</>
}

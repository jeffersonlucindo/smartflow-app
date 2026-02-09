import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { SignupForm } from '@/components/auth/signup-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Criar conta - Smart Flow Nutrition',
    description: 'Crie sua conta para começar',
}

interface SignupPageProps {
    searchParams: Promise<{
        error?: string
    }>
}

export default async function SignupPage({ searchParams }: SignupPageProps) {
    const supabase = await createClient()

    // Assegura que usamos o searchParams, mesmo que não seja usado diretamente
    // para evitar warnings de unused variable no build, caso o linter seja estrito
    await searchParams

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Se já está logado, redirecionar para dashboard
    if (user) {
        redirect('/dashboard')
    }

    return <SignupForm />
}

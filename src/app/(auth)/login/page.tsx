import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { LoginForm } from '@/components/auth/login-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login - Smart Flow Nutrition',
    description: 'Entre com sua conta para continuar',
}

interface LoginPageProps {
    searchParams: Promise<{
        error?: string
    }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const supabase = await createClient()
    const { error } = await searchParams

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Se já está logado, redirecionar para dashboard
    if (user) {
        redirect('/dashboard')
    }

    // Mapear erros para mensagens amigáveis
    const errorMessages: Record<string, string> = {
        confirmation_failed: 'Falha ao confirmar email. O link pode ter expirado.',
        no_session: 'Sessão expirada. Solicite um novo link de recuperação.',
        oauth_error: 'Erro ao autenticar com provedor externo.',
        no_code: 'Link de autenticação inválido.',
    }

    const errorMessage = error
        ? errorMessages[error] || 'Ocorreu um erro. Tente novamente.'
        : undefined

    return <LoginForm errorMessage={errorMessage} />
}

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ResetPasswordForm } from '@/components/auth/reset-password-form'

export const metadata = {
    title: 'Redefinir Senha | Smart Flow Nutrition',
    description: 'Defina sua nova senha',
}

export default async function ResetPasswordPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    // Precisa estar autenticado (via recovery link) para resetar senha
    if (!user) {
        redirect('/login?error=no_session')
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/50">
            <ResetPasswordForm />
        </div>
    )
}

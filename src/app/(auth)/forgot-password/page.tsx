import { ForgotPasswordForm } from '@/components/auth/forgot-password-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Esqueci minha senha - Smart Flow Nutrition',
    description: 'Recupere o acesso à sua conta',
}

export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/50">
            <ForgotPasswordForm />
        </div>
    )
}

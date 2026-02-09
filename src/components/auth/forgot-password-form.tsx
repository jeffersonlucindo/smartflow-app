'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'sonner'
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const forgotPasswordSchema = z.object({
    email: z.string().email('Email inválido'),
})

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export function ForgotPasswordForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const supabase = createClient()

    const form = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: '',
        },
    })

    const onSubmit = async (values: ForgotPasswordFormValues) => {
        try {
            setIsLoading(true)

            const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/confirm?type=recovery&next=/reset-password`

            const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
                redirectTo,
            })

            if (error) {
                toast.error('Erro ao enviar email', {
                    description: error.message,
                })
                return
            }

            setEmailSent(true)
            toast.success('Email enviado com sucesso!', {
                description: 'Verifique sua caixa de entrada para redefinir sua senha.',
                icon: <CheckCircle2 className="h-5 w-5" />,
            })
        } catch (error: any) {
            console.error('Forgot password error:', error)

            // Tenta extrair a mensagem de erro mais específica possível
            const errorMessage = error?.message || error?.error_description || 'Ocorreu um erro inesperado ao tentar enviar o email.'

            toast.error('Erro ao enviar email', {
                description: errorMessage,
                duration: 5000, // Dá mais tempo para ler
            })
        } finally {
            setIsLoading(false)
        }
    }

    if (emailSent) {
        return (
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">Email Enviado!</CardTitle>
                    <CardDescription>
                        Enviamos um link de recuperação para seu email.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                        <p className="mb-2">
                            <strong>O que fazer agora:</strong>
                        </p>
                        <ol className="list-decimal list-inside space-y-1">
                            <li>Verifique sua caixa de entrada</li>
                            <li>Clique no link de recuperação</li>
                            <li>Defina sua nova senha</li>
                        </ol>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                        Não recebeu o email? Verifique sua pasta de spam ou tente novamente em alguns minutos.
                    </p>

                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => router.push('/login')}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para o login
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">Esqueci minha senha</CardTitle>
                    </div>
                </div>
                <CardDescription>
                    Digite seu email e enviaremos um link para redefinir sua senha.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="seu@email.com"
                                                className="pl-9"
                                                disabled={isLoading}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Enviando...' : 'Enviar link de recuperação'}
                        </Button>

                        <div className="text-center">
                            <Link
                                href="/login"
                                className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Voltar para o login
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

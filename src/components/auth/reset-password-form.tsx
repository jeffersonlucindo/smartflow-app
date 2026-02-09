'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { toast } from 'sonner'
import { Lock, Eye, EyeOff, CheckCircle2 } from 'lucide-react'

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

const resetPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, 'Senha deve ter no mínimo 8 caracteres')
            .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
            .regex(/[a-z]/, 'Senha deve conter pelo menos uma letra minúscula')
            .regex(/[0-9]/, 'Senha deve conter pelo menos um número'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
    })

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>

export function ResetPasswordForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const supabase = createClient()

    const form = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async (values: ResetPasswordFormValues) => {
        try {
            setIsLoading(true)

            const { error } = await supabase.auth.updateUser({
                password: values.password,
            })

            if (error) {
                toast.error('Erro ao redefinir senha', {
                    description: error.message,
                })
                return
            }

            toast.success('Senha redefinida com sucesso!', {
                description: 'Você será redirecionado para o dashboard.',
                icon: <CheckCircle2 className="h-5 w-5" />,
            })

            // Aguardar 1.5s para mostrar toast antes de redirecionar
            setTimeout(() => {
                router.push('/dashboard')
                router.refresh()
            }, 1500)
        } catch (error) {
            console.error('Reset password error:', error)
            toast.error('Erro ao redefinir senha', {
                description: 'Ocorreu um erro inesperado. Tente novamente.',
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
                <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                        <Lock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl font-bold">Redefinir Senha</CardTitle>
                    </div>
                </div>
                <CardDescription>
                    Digite sua nova senha abaixo. Certifique-se de que ela seja forte e única.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nova Senha</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                {...field}
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="••••••••"
                                                className="pl-9 pr-9"
                                                disabled={isLoading}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                                disabled={isLoading}
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Mínimo 8 caracteres, com letras maiúsculas, minúsculas e números
                                    </p>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirmar Senha</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                {...field}
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                placeholder="••••••••"
                                                className="pl-9 pr-9"
                                                disabled={isLoading}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                                disabled={isLoading}
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </button>
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
                            {isLoading ? 'Redefinindo...' : 'Redefinir Senha'}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
import { Separator } from '@/components/ui/separator'
import { emailLogin, googleLogin } from '@/app/(auth)/login/actions'
import Link from 'next/link'

const formSchema = z.object({
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
})

type FormValues = z.infer<typeof formSchema>

interface LoginFormProps {
    errorMessage?: string
}

export function LoginForm({ errorMessage }: LoginFormProps) {
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isGoogleLoading, setIsGoogleLoading] = useState(false)
    const router = useRouter()

    // Mostrar erro de query param se existir
    useEffect(() => {
        if (errorMessage) {
            toast.error('Erro de Autenticação', {
                description: errorMessage,
            })
        }
    }, [errorMessage])

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: FormValues) {
        setIsLoading(true)
        try {
            const formData = new FormData()
            formData.append('email', values.email)
            formData.append('password', values.password)

            const result = await emailLogin(formData)

            if (result?.error) {
                toast.error('Erro ao entrar', {
                    description: result.error,
                })
                setIsLoading(false)
            }
            // Se não houver erro, o redirect acontece no server action
        } catch (error: any) {
            // Ignorar erro de redirecionamento do Next.js
            if (error?.message === 'NEXT_REDIRECT' || error?.digest?.includes('NEXT_REDIRECT')) {
                return
            }
            console.error('Login error:', error)
            toast.error('Erro ao entrar', {
                description: 'Ocorreu um erro inesperado. Tente novamente.',
            })
            setIsLoading(false)
        }
    }

    async function handleGoogleLogin() {
        setIsGoogleLoading(true)
        try {
            const result = await googleLogin()

            if (result?.error) {
                toast.error('Erro ao entrar com Google', {
                    description: result.error,
                })
                setIsGoogleLoading(false)
            }
            // Se não houver erro, o redirect acontece no server action
        } catch (error: any) {
            if (error?.message === 'NEXT_REDIRECT' || error?.digest?.includes('NEXT_REDIRECT')) {
                return
            }
            console.error('Google login error:', error)
            toast.error('Erro ao entrar com Google', {
                description: 'Ocorreu um erro inesperado. Tente novamente.',
            })
            setIsGoogleLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md px-4">
            {/* Logo and Brand */}
            <div className="flex flex-col items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center mb-4">
                    <div className="text-white text-3xl font-bold">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 3V8M16 3V8M3 10H21M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <h1 className="text-2xl font-bold text-foreground">Smart Flow Nutrition</h1>
                <p className="text-sm text-muted-foreground mt-1">Sistema de Gestão Nutricional</p>
            </div>

            {/* Login Card */}
            <Card>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center">Bem-vindo de volta</CardTitle>
                    <CardDescription className="text-center">
                        Entre com sua conta para continuar
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
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    placeholder="seu@email.com"
                                                    className="pl-10"
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Senha</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                                <Input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="••••••••"
                                                    className="pl-10 pr-10"
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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
                                    </FormItem>
                                )}
                            />

                            <div className="text-right">
                                <Link
                                    href="/forgot-password"
                                    className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline"
                                >
                                    Esqueci minha senha
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Entrando...' : 'Entrar'}
                            </Button>
                        </form>
                    </Form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <Separator />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">OU CONTINUE COM</span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={handleGoogleLogin}
                        disabled={isGoogleLoading}
                    >
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        {isGoogleLoading ? 'Conectando...' : 'Continuar com Google'}
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col">
                    <p className="text-sm text-muted-foreground text-center">
                        Não tem uma conta?{' '}
                        <Link href="/signup" className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium">
                            Criar conta
                        </Link>
                    </p>
                </CardFooter>
            </Card>

            {/* Footer */}
            <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                    Ao entrar, você concorda com nossos{' '}
                    <Link href="/terms" className="hover:underline">
                        Termos de Serviço
                    </Link>{' '}
                    e{' '}
                    <Link href="/privacy" className="hover:underline">
                        Política de Privacidade
                    </Link>
                </p>
            </div>
        </div>
    )
}

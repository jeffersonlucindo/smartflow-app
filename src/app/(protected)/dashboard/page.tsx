import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { UserNav } from '@/components/user-nav'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
    const supabase = await createClient()

    // Verificar autenticação
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b">
                <div className="flex h-16 items-center px-4 container mx-auto justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">SF</span>
                        </div>
                        <h1 className="text-lg font-semibold">Smart Flow Nutrition</h1>
                    </div>
                    <UserNav user={user} />
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-6">
                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <p className="text-muted-foreground">
                            Bem-vindo ao Smart Flow Nutrition
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Bem-vindo!</CardTitle>
                                <CardDescription>
                                    Você está autenticado como
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-medium">{user.email}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    ID: {user.id}
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Pacientes</CardTitle>
                                <CardDescription>
                                    Gerencie seus pacientes
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">0</p>
                                <p className="text-xs text-muted-foreground">pacientes cadastrados</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Planos Alimentares</CardTitle>
                                <CardDescription>
                                    Seus planos ativos
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">0</p>
                                <p className="text-xs text-muted-foreground">planos criados</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

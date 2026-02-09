import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')
    const next = requestUrl.searchParams.get('next') ?? '/dashboard'
    const cleanNext = next.startsWith('/') ? next : '/dashboard'
    const origin = requestUrl.origin

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            // Sucesso - redirecionar para o destino
            return NextResponse.redirect(`${origin}${cleanNext}`)
        }

        // Erro ao trocar code por session
        console.error('OAuth callback error:', error)
        return NextResponse.redirect(`${origin}/login?error=oauth_error`)
    }

    // Sem code - redirecionar para login
    return NextResponse.redirect(`${origin}/login?error=no_code`)
}

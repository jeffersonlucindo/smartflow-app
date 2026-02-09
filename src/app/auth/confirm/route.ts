import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import type { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const token_hash = searchParams.get('token_hash')
    const type = searchParams.get('type') as EmailOtpType | null
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/dashboard'

    // Validar se next é um caminho relativo para evitar Open Redirect
    const cleanNext = next.startsWith('/') ? next : '/dashboard'

    if (token_hash && type) {
        const supabase = await createClient()

        const { error } = await supabase.auth.verifyOtp({
            type,
            token_hash,
        })

        if (!error) {
            // Se for recuperação de senha, redirecionar para página de reset
            if (type === 'recovery') {
                return NextResponse.redirect(new URL('/reset-password', request.url))
            }

            // Para outros tipos (signup, email_change, etc), ir para dashboard
            return NextResponse.redirect(new URL(cleanNext, request.url))
        }
    } else if (code) {
        const supabase = await createClient()

        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) {
            // Se houver um next param explícito ou se estamos vindo de um fluxo que define next
            return NextResponse.redirect(new URL(cleanNext, request.url))
        }
    }

    // Se der erro ou faltar parâmetros, redirecionar para login com mensagem
    return NextResponse.redirect(new URL('/login?error=confirmation_failed', request.url))
}

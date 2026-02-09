'use server'

import { createClient } from '@/lib/supabase/server'
import { z } from 'zod'
import { googleLogin } from '@/app/(auth)/login/actions'

const signupSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
})

export async function emailSignup(formData: FormData) {
    const supabase = await createClient()

    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const validatedFields = signupSchema.safeParse(data)

    if (!validatedFields.success) {
        return { error: 'Dados inválidos. Verifique as informações.' }
    }

    const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
            data: {
                full_name: data.name,
            },
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
        },
    })

    if (error) {
        return { error: error.message }
    }

    return { success: true }
}

export { googleLogin }

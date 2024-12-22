"use server";
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'
import { LoginSchema } from '@/lib/validations/auth'
import bcrypt from 'bcryptjs'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function login(data: z.infer<typeof LoginSchema>) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (!user) {
      return { error: 'Invalid credentials' }
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password)
    
    if (!passwordMatch) {
      return { error: 'Invalid credentials' }
    }

    // Set session cookie
    const sessionToken = crypto.randomUUID()
    await prisma.session.create({
      data: {
        sessionToken,
        userId: user.id,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      },
    })

    cookies().set('session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60, // 30 days
    })

    return { success: true }
  } catch (error) {
    console.error('Login error:', error)
    return { error: 'Something went wrong' }
  }
}
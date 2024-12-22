'use client'

import React from 'react'
import { z } from 'zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoginSchema } from '@/lib/validations/auth'
import { login } from '@/lib/actions/auth'
import { successToast, errorToast } from '@/components/utils/toastNotification'

type LoginFormData = z.infer<typeof LoginSchema>

// Change to function declaration instead of export default directly
export default function LoginForm() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    startTransition(async () => {
      const result = await login(data)

      if (result.error) {
        errorToast(`${result.error}`)
        return
      }
      successToast(`You have successfully logged in.`)

      router.push('/dashboard')
      router.refresh()
    })
  }

  return (
    <div className="container flex items-center justify-center min-h-screen">
    <div className="w-full max-w-md space-y-8 bg-gray-50 shadow-2xl py-6 px-8 rounded-2xl" >
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please sign in to your account
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="you@example.com"
              disabled={isPending}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="••••••••"
              disabled={isPending}
              aria-describedby={errors.password ? 'password-error' : undefined}
            />
            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              {...register('rememberMe')}
              disabled={isPending}
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm">
              Remember me
            </label>
          </div>

          <Button
            variant="link"
            className="text-sm"
            onClick={() => router.push('/forgot-password')}
            type="button"
          >
            Forgot password?
          </Button>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isPending}
        >
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
    </div>
  </div>
  )
}

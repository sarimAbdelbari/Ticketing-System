
import React, { Suspense } from 'react'
import Loading from '../loading'
import LoginForm from '@/components/auth/loginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<Loading />}>
        <LoginForm />
      </Suspense>
    </div>
  )
}

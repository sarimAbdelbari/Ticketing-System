
import React, { Suspense } from 'react'
import Loading from '../loading'
import RegisterForm from '@/components/auth/registerForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<Loading />}>
        <RegisterForm />
      </Suspense>
    </div>
  )
}

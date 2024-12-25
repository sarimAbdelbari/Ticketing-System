'use client';

import React from 'react';
import { z } from 'zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { successToast, errorToast } from '@/components/utils/toastNotification';
import { RegistrationSchema } from '@/lib/validations/auth'
import { register as registerUser } from '@/lib/actions/auth';



type RegistrationFormData = z.infer<typeof RegistrationSchema>;

export default function RegistrationForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(RegistrationSchema),
  });

  const onSubmit = (data: RegistrationFormData) => {
    startTransition(async () => {
      const result = await registerUser(data);

      if (result.error) {
        errorToast(`${result.error}`);
        return;
      }

      successToast(`Account created successfully!`);
      router.push('/dashboard');
    });
  };

  return (
    <div className="container flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md space-y-8 bg-gray-50 shadow-2xl py-6 px-8 rounded-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Create your account</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in the form to sign up
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                placeholder="Your name"
                disabled={isPending}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

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

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Creating account...' : 'Sign up'}
          </Button>
        </form>
      </div>
    </div>
  );
}

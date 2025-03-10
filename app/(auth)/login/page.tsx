import { Suspense } from "react";
import { LoginForm } from "@/components/auth/login-form";
import { LoginLoading } from "@/components/auth/login-loading";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<LoginLoading />}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
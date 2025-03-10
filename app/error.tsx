"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="text-3xl font-bold">Something went wrong!</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          An unexpected error occurred. Our team has been notified and is working to fix the issue.
        </p>
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
      </div>
    </div>
  );
}
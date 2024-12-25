"use client";

import { Input } from "./input";
import { Label } from "./label";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function FormField({ label, error, hint, className, ...props }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        className={cn(
          error && "border-destructive focus-visible:ring-destructive",
          className
        )}
        {...props}
      />
      {(error || hint) && (
        <div className="flex items-center gap-2 text-sm">
          {error ? (
            <p className="text-destructive">{error}</p>
          ) : (
            hint && (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Info className="h-4 w-4" />
                <p>{hint}</p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
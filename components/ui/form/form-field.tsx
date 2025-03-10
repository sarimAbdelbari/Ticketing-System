"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, type, label, error, ...props }, ref) => {
    const id = React.useId();

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
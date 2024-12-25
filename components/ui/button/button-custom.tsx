"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonCustomProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const ButtonCustom = React.forwardRef<HTMLButtonElement, ButtonCustomProps>(
  ({ className, isLoading, loadingText, children, ...props }, ref) => {
    const buttonText = isLoading ? loadingText || "Loading..." : children;

    return (
      <Button
        ref={ref}
        className={cn("relative", className)}
        disabled={isLoading || props.disabled}
        {...props}
        aria-busy={isLoading}
      >
        {isLoading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
        )}
        <span>{buttonText}</span>
      </Button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";
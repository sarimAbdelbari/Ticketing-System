"use client";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Loader2 } from "lucide-react";
import { ButtonProps } from "@radix-ui/react-button";
import { forwardRef } from "react";

interface CustomButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
  loadingText?: string;
}

const ButtonCustom = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = "primary", isLoading, loadingText, children, disabled, ...props }, ref) => {
    const variantStyles = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <Button
        className={cn(
          variantStyles[variant],
          "transition-colors",
          isLoading && "cursor-not-allowed opacity-70",
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText || "Loading..."}
          </>
        ) : (
          children
        )}
      </Button>
    );
  }
);

ButtonCustom.displayName = "ButtonCustom";

export { ButtonCustom };
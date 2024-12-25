"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function CardContainer({ children, className, onClick }: CardContainerProps) {
  return (
    <Card 
      className={cn(
        "card-hover glass-effect",
        "border border-border/50",
        "p-6 transition-all duration-200",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
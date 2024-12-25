"use client";

import { useAnimations } from "@/lib/hooks/use-animations";
import { cn } from "@/lib/utils";

interface AnimatedContainerProps {
  children: React.ReactNode;
  animation: string;
  className?: string;
}

export function AnimatedContainer({
  children,
  animation,
  className,
}: AnimatedContainerProps) {
  const { shouldAnimate } = useAnimations();

  return (
    <div className={cn(shouldAnimate ? animation : "", className)}>
      {children}
    </div>
  );
}
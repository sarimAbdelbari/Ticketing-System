"use client";

import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div className={cn(
      "min-h-screen pb-8 pt-20",
      "bg-gradient-to-b from-background to-background-secondary",
      className
    )}>
      <div className="container-responsive">
        <div className="section-bg content-spacing">
          {children}
        </div>
      </div>
    </div>
  );
}
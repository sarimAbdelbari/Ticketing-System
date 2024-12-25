"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.random() * 20;
          return next > 90 ? 90 : next;
        });
      }, 500);

      return () => clearInterval(timer);
    } else {
      setProgress(0);
    }
  }, [isVisible]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="h-full bg-primary transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
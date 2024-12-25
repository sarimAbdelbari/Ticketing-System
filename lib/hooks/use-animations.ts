"use client";

import { useState, useEffect } from "react";

export function useAnimations() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isAnimationsEnabled, setIsAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Check user's motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return {
    shouldAnimate: isAnimationsEnabled && !isReducedMotion,
    setIsAnimationsEnabled,
  };
}
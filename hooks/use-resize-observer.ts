"use client";

import { useEffect, useRef, useState } from "react";

interface Size {
  width: number;
  height: number;
}

export function useResizeObserver(ref: React.RefObject<HTMLElement>) {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const observer = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (ref.current) {
      observer.current = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setSize({ width, height });
      });

      observer.current.observe(ref.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [ref]);

  return size;
}
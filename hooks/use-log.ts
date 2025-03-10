"use client";

import { useState, useEffect } from "react";
import { logs } from "@/lib/data/logs";
import type { Log } from "@/lib/types/logs";

export function useLog(id: string) {
  const [log, setLog] = useState<Log | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLog = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const foundLog = logs.find((l) => l.id === id);
        if (foundLog) {
          setLog(foundLog);
        } else {
          throw new Error("Log not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch log"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchLog();
  }, [id]);

  return { log, isLoading, error };
}
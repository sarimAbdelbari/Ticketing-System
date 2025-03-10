"use client";

import { useState, useEffect } from "react";
import { users } from "@/lib/data/users";
import type { User } from "@/lib/types/users";

export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const foundUser = users.find((u) => u.id === userId);
        if (foundUser) {
          setUser(foundUser);
        } else {
          throw new Error("User not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch user"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, isLoading, error };
}
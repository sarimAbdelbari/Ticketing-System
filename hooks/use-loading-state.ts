"use client";

import { useState, useCallback } from "react";

export function useLoadingState(initialState = false) {
  const [isLoading, setIsLoading] = useState(initialState);
  const [error, setError] = useState<Error | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const setLoadingError = useCallback((error: Error) => {
    setIsLoading(false);
    setError(error);
  }, []);

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setLoadingError,
  };
}
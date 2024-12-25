"use client";

import { toast } from "sonner";

interface NotificationOptions {
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
}

export function useNotifications() {
  const success = (title: string, options?: NotificationOptions) => {
    toast.success(title, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 5000,
    });
  };

  const error = (title: string, options?: NotificationOptions) => {
    toast.error(title, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 5000,
    });
  };

  const info = (title: string, options?: NotificationOptions) => {
    toast.info(title, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 5000,
    });
  };

  const warning = (title: string, options?: NotificationOptions) => {
    toast.warning(title, {
      description: options?.description,
      action: options?.action,
      duration: options?.duration || 5000,
    });
  };

  const promise = <T>(
    promise: Promise<T>,
    {
      loading = "Loading...",
      success = "Success!",
      error = "Error",
    }: {
      loading?: string;
      success?: string | ((data: T) => string);
      error?: string | ((error: Error) => string);
    }
  ) => {
    toast.promise(promise, {
      loading,
      success,
      error,
    });
  };

  return {
    success,
    error,
    info,
    warning,
    promise,
  };
}
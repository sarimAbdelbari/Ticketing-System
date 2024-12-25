"use client";

import { useState } from "react";
import { Check, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InlineEditFieldProps {
  value: string;
  onSave: (value: string) => Promise<void>;
  onCancel?: () => void;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  validation?: (value: string) => string | undefined;
  className?: string;
  children: React.ReactNode;
}

export function InlineEditField({
  value: initialValue,
  onSave,
  onCancel,
  isEditing,
  setIsEditing,
  validation,
  className,
  children,
}: InlineEditFieldProps) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (validation) {
      const validationError = validation(value);
      if (validationError) {
        setError(validationError);
        return;
      }
    }

    setIsLoading(true);
    try {
      await onSave(value);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to save changes");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setValue(initialValue);
    setError(undefined);
    setIsEditing(false);
    onCancel?.();
  };

  if (!isEditing) {
    return (
      <div 
        className={cn("group relative cursor-pointer", className)}
        onClick={() => setIsEditing(true)}
      >
        {children}
        <div className="absolute inset-0 bg-muted/5 opacity-0 group-hover:opacity-100 transition-opacity rounded" />
      </div>
    );
  }

  return (
    <div className={cn("space-y-2", className)}>
      {children}
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          onClick={handleSave}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Check className="h-4 w-4" />
          )}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleCancel}
          disabled={isLoading}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
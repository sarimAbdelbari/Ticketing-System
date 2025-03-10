"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BaseModal } from "./base-modal";

interface ConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "warning" | "default";
  isLoading?: boolean;
}

export function ConfirmationModal({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "default",
  isLoading = false,
}: ConfirmationModalProps) {
  const variantStyles = {
    danger: {
      icon: "text-destructive",
      button: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    },
    warning: {
      icon: "text-yellow-500",
      button: "bg-yellow-500 text-white hover:bg-yellow-600",
    },
    default: {
      icon: "text-primary",
      button: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
  };

  const styles = variantStyles[variant];

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title={title}
      footer={
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
          >
            {cancelText}
          </Button>
          <Button
            className={styles.button}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : confirmText}
          </Button>
        </div>
      }
    >
      <div className="flex items-center gap-4">
        <AlertTriangle className={cn("h-12 w-12", styles.icon)} />
        <p className="text-muted-foreground">{description}</p>
      </div>
    </BaseModal>
  );
}
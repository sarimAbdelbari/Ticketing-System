"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BaseModal } from "@/components/modals/base-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNotifications } from "@/hooks/use-notifications";
import { createTicketSchema } from "@/lib/validations/tickets";
import type { CreateTicketData } from "@/lib/validations/tickets";

interface CreateTicketModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function CreateTicketModal({
  open,
  onClose,
  onSuccess,
}: CreateTicketModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { success, error } = useNotifications();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTicketData>({
    resolver: zodResolver(createTicketSchema),
  });

  const onSubmit = async (data: CreateTicketData) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      success("Ticket created successfully");
      reset();
      onSuccess?.();
      onClose();
    } catch (err) {
      error("Failed to create ticket");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title="Create New Ticket"
      description="Fill in the details below to create a new support ticket."
      footer={
        <div className="flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Ticket"}
          </Button>
        </div>
      }
    >
      <form className="space-y-4">
        <div>
          <Input
            placeholder="Title"
            {...register("title")}
            error={errors.title?.message}
          />
        </div>

        <div>
          <Textarea
            placeholder="Description"
            {...register("description")}
            error={errors.description?.message}
            className="min-h-[100px]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Select
            {...register("priority")}
            error={errors.priority?.message}
          >
            <SelectTrigger>
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>

          <Select
            {...register("assignedTo")}
            error={errors.assignedTo?.message}
          >
            <SelectTrigger>
              <SelectValue placeholder="Assign to" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john">John Doe</SelectItem>
              <SelectItem value="sarah">Sarah Wilson</SelectItem>
              <SelectItem value="mike">Mike Johnson</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
    </BaseModal>
  );
}
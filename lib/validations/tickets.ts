import { z } from "zod";
import type { TicketPriority } from "@/lib/types/tickets";

export const createTicketSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description must be less than 1000 characters"),
  priority: z.enum(["low", "medium", "high"] as const),
  assignedTo: z.string().min(1, "Please select an assignee"),
});

export type CreateTicketData = z.infer<typeof createTicketSchema>;
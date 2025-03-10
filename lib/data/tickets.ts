import { TicketStatus, TicketPriority } from "@/lib/types/tickets";

export const tickets = [
  {
    id: "TICK-1234",
    title: "Unable to access dashboard",
    priority: "high" as TicketPriority,
    status: "open" as TicketStatus,
    assignedTo: "John Doe",
    createdAt: "2024-03-20T10:30:00Z",
  },
  {
    id: "TICK-1235",
    title: "Login page not responsive",
    priority: "medium" as TicketPriority,
    status: "in-progress" as TicketStatus,
    assignedTo: "Jane Smith",
    createdAt: "2024-03-19T15:45:00Z",
  },
  {
    id: "TICK-1236",
    title: "Error in payment processing",
    priority: "high" as TicketPriority,
    status: "resolved" as TicketStatus,
    assignedTo: "Mike Johnson",
    createdAt: "2024-03-18T09:15:00Z",
  },
  {
    id: "TICK-1237",
    title: "Update user profile picture",
    priority: "low" as TicketPriority,
    status: "open" as TicketStatus,
    assignedTo: "Sarah Wilson",
    createdAt: "2024-03-17T14:20:00Z",
  },
  {
    id: "TICK-1238",
    title: "Integration with third-party API",
    priority: "medium" as TicketPriority,
    status: "in-progress" as TicketStatus,
    assignedTo: "John Doe",
    createdAt: "2024-03-16T11:00:00Z",
  },
];
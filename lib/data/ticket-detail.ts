import { Ticket } from "@/lib/types/tickets";

export const ticketDetail: Ticket = {
  id: "TICK-1234",
  title: "Unable to access dashboard",
  description: "Users are reporting intermittent issues accessing the main dashboard. The error occurs specifically during peak hours and displays a 503 Service Unavailable error.",
  priority: "high",
  status: "open",
  assignedTo: "John Doe",
  createdAt: "2024-03-20T10:30:00Z",
  comments: [
    {
      id: "1",
      content: "I've started investigating the server logs for any anomalies.",
      author: "John Doe",
      createdAt: "2024-03-20T11:30:00Z",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: "2",
      content: "Found some unusual spike in traffic during these times. Might be related to a DDOS attack.",
      author: "Sarah Wilson",
      createdAt: "2024-03-20T12:15:00Z",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face"
    }
  ],
  activityLog: [
    {
      id: "1",
      action: "Ticket created",
      actor: "System",
      timestamp: "2024-03-20T10:30:00Z"
    },
    {
      id: "2",
      action: "Assigned to John Doe",
      actor: "Sarah Wilson",
      timestamp: "2024-03-20T10:35:00Z"
    },
    {
      id: "3",
      action: "Priority changed to High",
      actor: "John Doe",
      timestamp: "2024-03-20T11:00:00Z"
    }
  ],
  relatedTickets: ["TICK-1235", "TICK-1236"]
};
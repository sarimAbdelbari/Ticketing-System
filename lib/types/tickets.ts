export type TicketStatus = "open" | "in-progress" | "resolved" | "closed";
export type TicketPriority = "low" | "medium" | "high";

export interface Comment {
  id: string;
  content: string;
  author: string;
  createdAt: string;
  avatar?: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  actor: string;
  timestamp: string;
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignedTo: string;
  createdAt: string;
  comments: Comment[];
  activityLog: ActivityLog[];
  relatedTickets?: string[];
}
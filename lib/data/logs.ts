export type LogLevel = "info" | "warning" | "error" | "success";

export interface Log {
  id: string;
  type: string;
  level: LogLevel;
  description: string;
  user: string;
  timestamp: string;
}

export const logs: Log[] = [
  {
    id: "1",
    type: "Ticket Created",
    level: "info",
    description: "New ticket #1234 created",
    user: "John Doe",
    timestamp: "2024-03-20T10:30:00Z"
  },
  {
    id: "2",
    type: "Login Failed",
    level: "error",
    description: "Failed login attempt for user sarah@example.com",
    user: "System",
    timestamp: "2024-03-20T10:15:00Z"
  },
  {
    id: "3",
    type: "Status Changed",
    level: "success",
    description: "Ticket #1234 status changed to 'Resolved'",
    user: "Sarah Wilson",
    timestamp: "2024-03-20T09:45:00Z"
  },
  {
    id: "4",
    type: "System Update",
    level: "warning",
    description: "System maintenance scheduled for tonight",
    user: "System",
    timestamp: "2024-03-20T09:30:00Z"
  }
];
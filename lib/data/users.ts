import { User } from "@/lib/types/users";

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "agent",
    status: "active",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&crop=face",
    createdAt: "2024-02-20T14:30:00Z"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-03-10T09:15:00Z"
  },
  {
    id: "4",
    name: "Emily Brown",
    email: "emily@example.com",
    role: "agent",
    status: "inactive",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    createdAt: "2024-03-15T11:45:00Z"
  }
];
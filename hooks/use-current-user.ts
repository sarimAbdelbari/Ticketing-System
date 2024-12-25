"use client";

import { User } from "@/lib/types/user";

// Mock user for development
const mockUser: User = {
  id: "1",
  name: "Admin User",
  email: "admin@example.com",
  role: "admin"
};

export function useCurrentUser() {
  return {
    user: mockUser,
    isAdmin: mockUser.role === "admin",
    isContentCreator: mockUser.role === "content_creator",
    canCreateArticles: ["admin", "content_creator"].includes(mockUser.role)
  };
}
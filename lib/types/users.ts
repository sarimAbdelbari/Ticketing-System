export type UserRole = "admin" | "agent" | "user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  status: "active" | "inactive";
  createdAt: string;
}
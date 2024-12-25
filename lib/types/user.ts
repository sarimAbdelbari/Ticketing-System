export type UserRole = "admin" | "content_creator" | "user";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
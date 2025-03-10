import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  currentPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .optional(),
}).refine((data) => {
  // If either password field is filled, both must be filled
  if (data.currentPassword || data.newPassword) {
    return data.currentPassword && data.newPassword;
  }
  return true;
}, {
  message: "Both current and new password are required to change password",
  path: ["newPassword"],
});
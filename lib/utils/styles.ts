import { cn } from "@/lib/utils";

export const statusColors = {
  open: "bg-green-100 text-green-800",
  "in-progress": "bg-purple-100 text-purple-800",
  resolved: "bg-gray-100 text-gray-800",
  closed: "bg-gray-100 text-gray-800",
} as const;

export const priorityColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
} as const;

export function getBadgeStyles(type: keyof typeof statusColors | keyof typeof priorityColors, colorMap: typeof statusColors | typeof priorityColors): string {
  return cn("capitalize", colorMap[type]);
}
import { format } from "date-fns";

export function formatDate(date: string | Date, formatString: string = "MMM d, yyyy"): string {
  return format(new Date(date), formatString);
}

export function formatDateTime(date: string | Date): string {
  return format(new Date(date), "PPp");
}
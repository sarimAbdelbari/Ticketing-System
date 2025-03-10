import { Home, Ticket, Book, Users, History } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NavigationLink {
  href: string;
  label: string;
  icon: LucideIcon;
  description?: string;
}

export const navigationLinks: NavigationLink[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
    description: "Overview and statistics",
  },
  {
    href: "/tickets",
    label: "Tickets",
    icon: Ticket,
    description: "Manage support tickets",
  },
  {
    href: "/knowledge-base",
    label: "Knowledge Base",
    icon: Book,
    description: "Documentation and guides",
  },
  {
    href: "/users",
    label: "Users",
    icon: Users,
    description: "User management",
  },
  {
    href: "/logs",
    label: "Logs",
    icon: History,
    description: "System activity logs",
  },
];
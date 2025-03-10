import { TicketIcon, AlertCircle, CheckCircle, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Stat {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  href: string;
}

export const stats: Stat[] = [
  {
    title: "Total Tickets",
    value: "1,234",
    change: "+12.3%",
    icon: TicketIcon,
    trend: "up",
    href: "/tickets",
  },
  {
    title: "Open Tickets",
    value: "423",
    change: "-2.3%",
    icon: AlertCircle,
    trend: "down",
    href: "/tickets?status=open",
  },
  {
    title: "Closed Tickets",
    value: "789",
    change: "+8.2%",
    icon: CheckCircle,
    trend: "up",
    href: "/tickets?status=closed",
  },
  {
    title: "Pending Review",
    value: "22",
    change: "+4.5%",
    icon: Clock,
    trend: "up",
    href: "/tickets?status=pending",
  },
];
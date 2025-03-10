import { TicketIcon } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's an overview of your ticketing system.
        </p>
      </div>
      <TicketIcon className="h-8 w-8 text-primary" />
    </div>
  );
}
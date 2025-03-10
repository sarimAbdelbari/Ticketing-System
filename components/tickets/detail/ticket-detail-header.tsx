import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/common/back-button";
import { ticketDetail } from "@/lib/data/ticket-detail";
import { cn } from "@/lib/utils";

const priorityColors = {
  low: "bg-blue-100 text-blue-800",
  medium: "bg-yellow-100 text-yellow-800",
  high: "bg-red-100 text-red-800",
};

const statusColors = {
  open: "bg-green-100 text-green-800",
  "in-progress": "bg-purple-100 text-purple-800",
  resolved: "bg-gray-100 text-gray-800",
  closed: "bg-gray-100 text-gray-800",
};

export function TicketDetailHeader({ ticketId }: { ticketId: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <BackButton href="/tickets" label="Back to Tickets" />
        <div>
          <p className="text-sm text-muted-foreground">Ticket {ticketId}</p>
          <h1 className="text-3xl font-bold">{ticketDetail.title}</h1>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Badge className={cn("capitalize", priorityColors[ticketDetail.priority])}>
          {ticketDetail.priority} Priority
        </Badge>
        <Badge className={cn("capitalize", statusColors[ticketDetail.status])}>
          {ticketDetail.status}
        </Badge>
      </div>
    </div>
  );
}
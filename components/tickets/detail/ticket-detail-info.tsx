import { Card } from "@/components/ui/card";
import { ticketDetail } from "@/lib/data/ticket-detail";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TicketDetailEditable } from "./ticket-detail-editable";

export function TicketDetailInfo({ ticketId }: { ticketId: string }) {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-muted-foreground">{ticketDetail.description}</p>
      </Card>

      <TicketDetailEditable
        ticketId={ticketId}
        status={ticketDetail.status}
        priority={ticketDetail.priority}
        assignedTo={ticketDetail.assignedTo}
      />
    </div>
  );
}
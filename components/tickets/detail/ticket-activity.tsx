import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { ticketDetail } from "@/lib/data/ticket-detail";
import { format } from "date-fns";

export function TicketActivity({ ticketId }: { ticketId: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-6">
            {ticketDetail.activityLog.map((activity) => (
              <div key={activity.id} className="relative pl-8">
                <div className="absolute left-[9px] -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                <div>
                  <p className="font-medium">{activity.action}</p>
                  <div className="text-sm text-muted-foreground">
                    <span>{activity.actor}</span>
                    <span className="mx-1">•</span>
                    <span>{format(new Date(activity.timestamp), "PPp")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
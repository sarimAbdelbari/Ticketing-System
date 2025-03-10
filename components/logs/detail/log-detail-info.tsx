"use client";

import { Card } from "@/components/ui/card";
import { useLog } from "@/hooks/use-log";
import { format } from "date-fns";

interface LogDetailInfoProps {
  logId: string;
}

export function LogDetailInfo({ logId }: LogDetailInfoProps) {
  const { log } = useLog(logId);

  if (!log) return null;

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Event Details</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Description</p>
              <p className="font-medium">{log.description}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">User</p>
              <p className="font-medium">{log.user}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Timestamp</p>
              <p className="font-medium">
                {format(new Date(log.timestamp), "PPpp")}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Event Type</p>
              <p className="font-medium">{log.type}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">IP Address</p>
              <p className="font-medium">{log.metadata?.ipAddress || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">User Agent</p>
              <p className="font-medium">{log.metadata?.userAgent || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">{log.metadata?.location || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Device</p>
              <p className="font-medium">{log.metadata?.device || "N/A"}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
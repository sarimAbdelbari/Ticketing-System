"use client";

import { BackButton } from "@/components/common/back-button";
import { Badge } from "@/components/ui/badge";
import { useLog } from "@/hooks/use-log";
import { cn } from "@/lib/utils";
import { eventColors } from "@/lib/utils/logs";

interface LogDetailHeaderProps {
  logId: string;
}

export function LogDetailHeader({ logId }: LogDetailHeaderProps) {
  const { log } = useLog(logId);

  if (!log) return null;

  return (
    <div className="space-y-4">
      <BackButton href="/logs" label="Back to Logs" />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">{log.type}</h1>
            <Badge className={cn("capitalize", eventColors[log.level])}>
              {log.level}
            </Badge>
          </div>
          <p className="text-muted-foreground">Log ID: {log.id}</p>
        </div>
      </div>
    </div>
  );
}
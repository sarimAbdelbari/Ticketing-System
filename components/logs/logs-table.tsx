"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { History } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { logs } from "@/lib/data/logs";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { TablePagination } from "@/components/common/pagination";
import { cn } from "@/lib/utils";
import { eventColors } from "@/lib/utils/logs";

export function LogsTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const itemsPerPage = 10;

  if (error) {
    return (
      <ErrorState
        title="Failed to load logs"
        description="There was an error loading the system logs. Please try again."
        onRetry={() => setError(null)}
      />
    );
  }

  if (!logs || logs.length === 0) {
    return (
      <EmptyState
        icon={History}
        title="No logs found"
        description="No system logs are available for the selected filters."
      />
    );
  }

  const totalPages = Math.ceil(logs.length / itemsPerPage);
  const paginatedLogs = logs.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLogs.map((log) => (
              <TableRow
                key={log.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/logs/${log.id}`)}
              >
                <TableCell>
                  <Badge className={cn("capitalize", eventColors[log.level])}>
                    {log.type}
                  </Badge>
                </TableCell>
                <TableCell>{log.description}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>
                  {format(new Date(log.timestamp), "PPp")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
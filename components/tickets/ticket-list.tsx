"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Inbox } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableHeaderCell } from "@/components/common/table/table-header-cell";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { tickets } from "@/lib/data/tickets";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { TablePagination } from "@/components/common/pagination";
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

export function TicketList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const itemsPerPage = 10;

  if (error) {
    return (
      <ErrorState
        title="Failed to load tickets"
        description="There was an error loading the ticket list. Please try again."
        onRetry={() => setError(null)}
      />
    );
  }

  if (!tickets || tickets.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title="No tickets found"
        description="Get started by creating your first support ticket."
        action={{
          label: "Create Ticket",
          onClick: () => router.push("/tickets/new"),
        }}
      />
    );
  }

  const totalPages = Math.ceil(tickets.length / itemsPerPage);
  const paginatedTickets = tickets.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell tooltip="Unique ticket identifier">ID</TableHeaderCell>
              <TableHeaderCell tooltip="Brief description of the issue">Title</TableHeaderCell>
              <TableHeaderCell tooltip="Urgency level of the ticket">Priority</TableHeaderCell>
              <TableHeaderCell tooltip="Current state in the workflow">Status</TableHeaderCell>
              <TableHeaderCell tooltip="Team member responsible for resolution">Assigned To</TableHeaderCell>
              <TableHeaderCell tooltip="When the ticket was created">Created</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTickets.map((ticket) => (
              <TableRow
                key={ticket.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/tickets/${ticket.id}`)}
              >
                <TableCell className="font-medium">{ticket.id}</TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>
                  <Badge className={cn("capitalize", priorityColors[ticket.priority])}>
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge className={cn("capitalize", statusColors[ticket.status])}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>{ticket.assignedTo}</TableCell>
                <TableCell>
                  {format(new Date(ticket.createdAt), "MMM d, yyyy")}
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
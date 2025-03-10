"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Users } from "lucide-react";
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
import { users } from "@/lib/data/users";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { TablePagination } from "@/components/common/pagination";
import { cn } from "@/lib/utils";

const roleColors = {
  admin: "bg-purple-100 text-purple-800",
  agent: "bg-blue-100 text-blue-800",
  user: "bg-gray-100 text-gray-800",
};

export function UserTable() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const itemsPerPage = 10;

  if (error) {
    return (
      <ErrorState
        title="Failed to load users"
        description="There was an error loading the user list. Please try again."
        onRetry={() => setError(null)}
      />
    );
  }

  if (!users || users.length === 0) {
    return (
      <EmptyState
        icon={Users}
        title="No users found"
        description="Get started by adding your first user to the system."
        action={{
          label: "Add User",
          onClick: () => router.push("/users/new"),
        }}
      />
    );
  }

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const paginatedUsers = users.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell tooltip="User's full name">Name</TableHeaderCell>
              <TableHeaderCell tooltip="Contact email address">Email</TableHeaderCell>
              <TableHeaderCell tooltip="User's permission level">Role</TableHeaderCell>
              <TableHeaderCell tooltip="Account status">Status</TableHeaderCell>
              <TableHeaderCell tooltip="When the account was created">Created</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow
                key={user.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge className={cn("capitalize", roleColors[user.role])}>
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "active" ? "default" : "secondary"}
                    className="capitalize"
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {format(new Date(user.createdAt), "MMM d, yyyy")}
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
"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableCustomProps<T> {
  data: T[];
  columns: {
    header: string;
    accessorKey: keyof T;
    cell?: (item: T) => React.ReactNode;
  }[];
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyState?: React.ReactNode;
}

export function TableCustom<T extends { id: string }>({
  data,
  columns,
  onRowClick,
  isLoading,
  emptyState,
}: TableCustomProps<T>) {
  return (
    <div role="region" aria-label="Data table" className="relative">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={String(column.accessorKey)}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center p-4">
                <span className="sr-only">Loading data...</span>
                <div className="animate-pulse space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-4 bg-muted rounded w-full"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ) : data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center p-4">
                {emptyState || "No data available"}
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => onRowClick?.(item)}
                className={cn(
                  "hover:bg-muted/50",
                  onRowClick && "cursor-pointer"
                )}
                tabIndex={onRowClick ? 0 : undefined}
                onKeyDown={(e) => {
                  if (onRowClick && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    onRowClick(item);
                  }
                }}
                role={onRowClick ? "button" : undefined}
              >
                {columns.map((column) => (
                  <TableCell key={String(column.accessorKey)}>
                    {column.cell
                      ? column.cell(item)
                      : String(item[column.accessorKey])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
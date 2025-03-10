"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface Column<T> {
  header: string;
  accessorKey: keyof T;
  cell?: (value: any, item: T) => React.ReactNode;
  className?: string;
  showOnMobile?: boolean;
}

interface ResponsiveTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
}

export function ResponsiveTable<T>({
  data,
  columns,
  onRowClick,
}: ResponsiveTableProps<T>) {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const toggleRow = (index: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHead
                    key={String(column.accessorKey)}
                    className={column.className}
                  >
                    {column.header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow
                  key={index}
                  className={cn(
                    "hover:bg-muted/50",
                    onRowClick && "cursor-pointer"
                  )}
                  onClick={() => onRowClick?.(item)}
                >
                  {columns.map((column) => (
                    <TableCell
                      key={String(column.accessorKey)}
                      className={column.className}
                    >
                      {column.cell
                        ? column.cell(item[column.accessorKey], item)
                        : String(item[column.accessorKey])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden bg-card"
          >
            <div
              className="p-4 flex items-center justify-between cursor-pointer"
              onClick={() => toggleRow(index)}
            >
              {/* Show only mobile-visible columns in header */}
              <div className="space-y-1">
                {columns
                  .filter((col) => col.showOnMobile)
                  .map((column) => (
                    <div key={String(column.accessorKey)}>
                      {column.cell
                        ? column.cell(item[column.accessorKey], item)
                        : String(item[column.accessorKey])}
                    </div>
                  ))}
              </div>
              <Button variant="ghost" size="icon">
                {expandedRows[index] ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>

            {/* Expanded content */}
            {expandedRows[index] && (
              <div className="border-t p-4 space-y-2">
                {columns
                  .filter((col) => !col.showOnMobile)
                  .map((column) => (
                    <div
                      key={String(column.accessorKey)}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-muted-foreground">
                        {column.header}
                      </span>
                      <span>
                        {column.cell
                          ? column.cell(item[column.accessorKey], item)
                          : String(item[column.accessorKey])}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
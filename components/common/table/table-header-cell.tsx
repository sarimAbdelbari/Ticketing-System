"use client";

import { TableHead } from "@/components/ui/table";
import { TooltipWrapper } from "@/components/common/tooltip/tooltip-content";

interface TableHeaderCellProps {
  children: React.ReactNode;
  tooltip?: string;
  className?: string;
}

export function TableHeaderCell({
  children,
  tooltip,
  className,
}: TableHeaderCellProps) {
  if (!tooltip) {
    return <TableHead className={className}>{children}</TableHead>;
  }

  return (
    <TableHead className={className}>
      <TooltipWrapper content={tooltip}>
        <span className="cursor-help">{children}</span>
      </TooltipWrapper>
    </TableHead>
  );
}
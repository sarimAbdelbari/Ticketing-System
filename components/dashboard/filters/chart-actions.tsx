"use client";

import { Button } from "@/components/ui/button";
import { BarChart2, Download } from "lucide-react";
import { TooltipWrapper } from "@/components/common/tooltip/tooltip-content";

interface ChartActionsProps {
  onDownload: () => void;
  onChangeType: () => void;
}

export function ChartActions({ onDownload, onChangeType }: ChartActionsProps) {
  return (
    <div className="flex gap-2">
      <TooltipWrapper content="Download chart data">
        <Button variant="outline" size="icon" onClick={onDownload}>
          <Download className="h-4 w-4" />
          <span className="sr-only">Download chart data</span>
        </Button>
      </TooltipWrapper>
      <TooltipWrapper content="Change chart type">
        <Button variant="outline" size="icon" onClick={onChangeType}>
          <BarChart2 className="h-4 w-4" />
          <span className="sr-only">Change chart type</span>
        </Button>
      </TooltipWrapper>
    </div>
  );
}
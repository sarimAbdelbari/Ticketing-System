"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { PriorityFilter } from "./filters/priority-filter";
import { AgentFilter } from "./filters/agent-filter";
import { CategoryFilter } from "./filters/category-filter";
import { ChartActions } from "./filters/chart-actions";
import { DateRangePicker } from "@/components/ui/date-range-picker";

interface ChartFilters {
  priority: string;
  agent: string;
  category: string;
  dateRange: DateRange | undefined;
}

export function DashboardChartFilters() {
  const [filters, setFilters] = useState<ChartFilters>({
    priority: "all",
    agent: "all",
    category: "all",
    dateRange: undefined,
  });

  const handleDownload = () => {
    // Implement download logic
    console.log("Downloading chart data...");
  };

  const handleChangeChartType = () => {
    // Implement chart type change logic
    console.log("Changing chart type...");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-end mb-6">
      <div className="flex flex-1 flex-col sm:flex-row gap-4">
        <PriorityFilter
          value={filters.priority}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, priority: value }))
          }
        />
        <AgentFilter
          value={filters.agent}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, agent: value }))
          }
        />
        <CategoryFilter
          value={filters.category}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value }))
          }
        />
        <DateRangePicker
          value={filters.dateRange}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, dateRange: value }))
          }
        />
      </div>
      <ChartActions
        onDownload={handleDownload}
        onChangeType={handleChangeChartType}
      />
    </div>
  );
}
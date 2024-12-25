"use client";

import { useState } from "react";
import { BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { DashboardChartFilters } from "./dashboard-chart-filters";
import { LineChart } from "@/components/ui/charts/line-chart";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { getChartData } from "@/lib/utils/chart";

export function DashboardChart() {
  const [error, setError] = useState<Error | null>(null);
  const [chartData, setChartData] = useState(getChartData());

  if (error) {
    return (
      <Card className="p-6">
        <ErrorState
          title="Failed to load chart data"
          description="There was an error loading the chart data. Please try again."
          onRetry={() => setError(null)}
        />
      </Card>
    );
  }

  if (chartData.length === 0) {
    return (
      <Card className="p-6">
        <EmptyState
          icon={BarChart2}
          title="No data available"
          description="There is no data available for the selected filters."
        />
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Ticket Trends</h3>
      <DashboardChartFilters />
      <div className="h-[300px] w-full">
        <LineChart
          data={chartData}
          lines={[
            { key: "tickets", color: "hsl(var(--primary))" }
          ]}
        />
      </div>
    </Card>
  );
}
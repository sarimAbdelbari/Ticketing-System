"use client";

import { Suspense } from "react";
import { LogsHeader } from "@/components/logs/logs-header";
import { LogsTable } from "@/components/logs/logs-table";
import { LogsFilters } from "@/components/logs/logs-filters";
import { LogsLoading } from "@/components/logs/logs-loading";

export default function LogsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<LogsLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <LogsHeader />
          <LogsFilters />
          <LogsTable />
        </div>
      </Suspense>
    </div>
  );
}
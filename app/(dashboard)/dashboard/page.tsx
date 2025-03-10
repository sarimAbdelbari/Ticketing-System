"use client";

import { Suspense } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardChart } from "@/components/dashboard/dashboard-chart";
import { DashboardActions } from "@/components/dashboard/dashboard-actions";
import { DashboardLoading } from "@/components/dashboard/dashboard-loading";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<DashboardLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <DashboardHeader />
          <DashboardStats />
          <DashboardChart />
          <DashboardActions />
        </div>
      </Suspense>
    </div>
  );
}
"use client";

import { CardContainer } from "@/components/ui/card/card-container";
import { StatsCard } from "./stats-card";
import { stats } from "@/lib/data/stats";

export function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <CardContainer key={stat.title} className="p-0">
          <StatsCard {...stat} />
        </CardContainer>
      ))}
    </div>
  );
}
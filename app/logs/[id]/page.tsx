"use client";

import { Suspense } from "react";
import { LogDetailHeader } from "@/components/logs/detail/log-detail-header";
import { LogDetailInfo } from "@/components/logs/detail/log-detail-info";
import { LogDetailLoading } from "@/components/logs/detail/log-detail-loading";

export default function LogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<LogDetailLoading />}>
        <div className="max-w-4xl mx-auto space-y-8">
          <LogDetailHeader logId={params.id} />
          <LogDetailInfo logId={params.id} />
        </div>
      </Suspense>
    </div>
  );
}
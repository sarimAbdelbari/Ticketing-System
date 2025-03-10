"use client";

import { Suspense } from "react";
import { TicketDetailHeader } from "@/components/tickets/detail/ticket-detail-header";
import { TicketDetailInfo } from "@/components/tickets/detail/ticket-detail-info";
import { TicketComments } from "@/components/tickets/detail/ticket-comments";
import { TicketActivity } from "@/components/tickets/detail/ticket-activity";
import { TicketDetailLoading } from "@/components/tickets/detail/ticket-detail-loading";

export default function TicketDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<TicketDetailLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <TicketDetailHeader ticketId={params.id} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <TicketDetailInfo ticketId={params.id} />
              <TicketComments ticketId={params.id} />
            </div>
            <div className="space-y-8">
              <TicketActivity ticketId={params.id} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
"use client";

import { Suspense } from "react";
import { TicketList } from "@/components/tickets/ticket-list";
import { TicketFilters } from "@/components/tickets/ticket-filters";
import { TicketHeader } from "@/components/tickets/ticket-header";
import { TicketLoading } from "@/components/tickets/ticket-loading";

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<TicketLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <TicketHeader />
          <TicketFilters />
          <TicketList />
        </div>
      </Suspense>
    </div>
  );
}
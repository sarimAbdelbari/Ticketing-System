"use client";

import { useState } from "react";
import { TicketIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreateTicketModal } from "./modals/create-ticket-modal";

export function TicketHeader() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <TicketIcon className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Tickets</h1>
            <p className="text-muted-foreground">
              Manage and track support tickets
            </p>
          </div>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" />
          New Ticket
        </Button>
      </div>

      <CreateTicketModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={() => {
          setIsCreateModalOpen(false);
          // In a real app, you would refresh the ticket list here
        }}
      />
    </>
  );
}
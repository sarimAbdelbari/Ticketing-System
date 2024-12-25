"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { InlineEditSelect } from "@/components/common/inline-edit/inline-edit-select";
// import { useToast } from "@/hooks/use-toast";
import type { TicketStatus, TicketPriority } from "@/lib/types/tickets";

interface TicketDetailEditableProps {
  ticketId: string;
  status: TicketStatus;
  priority: TicketPriority;
  assignedTo: string;
}

const statusOptions = [
  { value: "open", label: "Open" },
  { value: "in-progress", label: "In Progress" },
  { value: "resolved", label: "Resolved" },
  { value: "closed", label: "Closed" },
];

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const agentOptions = [
  { value: "john", label: "John Doe" },
  { value: "sarah", label: "Sarah Wilson" },
  { value: "mike", label: "Mike Johnson" },
];

export function TicketDetailEditable({
  ticketId,
  status: initialStatus,
  priority: initialPriority,
  assignedTo: initialAssignedTo,
}: TicketDetailEditableProps) {
  // const { toast } = useToast();
  const [isStatusEditing, setIsStatusEditing] = useState(false);
  const [isPriorityEditing, setIsPriorityEditing] = useState(false);
  const [isAssigneeEditing, setIsAssigneeEditing] = useState(false);

  const handleUpdate = async (field: string, value: string) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // toast({
      //   title: "Success",
      //   description: `${field} updated successfully`,
      // });
    } catch (error) {
      // toast({
      //   title: "Error",
      //   description: `Failed to update ${field.toLowerCase()}`,
      //   variant: "destructive",
      // });
      throw error;
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <InlineEditSelect
        label="Status"
        value={initialStatus}
        options={statusOptions}
        onSave={(value) => handleUpdate("Status", value)}
        isEditing={isStatusEditing}
        setIsEditing={setIsStatusEditing}
        className="pb-4 border-b"
      />

      <InlineEditSelect
        label="Priority"
        value={initialPriority}
        options={priorityOptions}
        onSave={(value) => handleUpdate("Priority", value)}
        isEditing={isPriorityEditing}
        setIsEditing={setIsPriorityEditing}
        className="pb-4 border-b"
      />

      <InlineEditSelect
        label="Assigned To"
        value={initialAssignedTo}
        options={agentOptions}
        onSave={(value) => handleUpdate("Assignee", value)}
        isEditing={isAssigneeEditing}
        setIsEditing={setIsAssigneeEditing}
      />
    </Card>
  );
}
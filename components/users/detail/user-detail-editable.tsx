"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { InlineEditSelect } from "@/components/common/inline-edit/inline-edit-select";
import { useToast } from "@/hooks/use-toast";
import type { UserRole } from "@/lib/types/users";

interface UserDetailEditableProps {
  userId: string;
  role: UserRole;
  status: "active" | "inactive";
}

const roleOptions = [
  { value: "admin", label: "Admin" },
  { value: "agent", label: "Agent" },
  { value: "user", label: "User" },
];

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive" },
];

export function UserDetailEditable({
  userId,
  role: initialRole,
  status: initialStatus,
}: UserDetailEditableProps) {
  const { toast } = useToast();
  const [isRoleEditing, setIsRoleEditing] = useState(false);
  const [isStatusEditing, setIsStatusEditing] = useState(false);

  const handleUpdate = async (field: string, value: string) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: `${field} updated successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to update ${field.toLowerCase()}`,
        variant: "destructive",
      });
      throw error;
    }
  };

  return (
    <Card className="p-6 space-y-6">
      <InlineEditSelect
        label="Role"
        value={initialRole}
        options={roleOptions}
        onSave={(value) => handleUpdate("Role", value)}
        isEditing={isRoleEditing}
        setIsEditing={setIsRoleEditing}
        className="pb-4 border-b"
      />

      <InlineEditSelect
        label="Status"
        value={initialStatus}
        options={statusOptions}
        onSave={(value) => handleUpdate("Status", value)}
        isEditing={isStatusEditing}
        setIsEditing={setIsStatusEditing}
      />
    </Card>
  );
}
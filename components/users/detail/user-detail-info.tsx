"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUser } from "@/hooks/use-user";
import { useToast } from "@/hooks/use-toast";
import { UserDetailEditable } from "./user-detail-editable";

interface UserDetailInfoProps {
  userId: string;
}

export function UserDetailInfo({ userId }: UserDetailInfoProps) {
  const { user } = useUser(userId);
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  if (!user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Success",
        description: "User information updated successfully",
      });
      setIsEditing(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user information",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User Information</h2>
          <Button
            variant="outline"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={!isEditing}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <Button type="submit">Save Changes</Button>
            </div>
          )}
        </form>
      </Card>

      <UserDetailEditable
        userId={userId}
        role={user.role}
        status={user.status}
      />
    </div>
  );
}
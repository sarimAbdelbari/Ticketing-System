"use client";

import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/common/back-button";
import { useUser } from "@/hooks/use-user";
import { cn } from "@/lib/utils";

const roleColors = {
  admin: "bg-purple-100 text-purple-800",
  agent: "bg-blue-100 text-blue-800",
  user: "bg-gray-100 text-gray-800",
};

interface UserDetailHeaderProps {
  userId: string;
}

export function UserDetailHeader({ userId }: UserDetailHeaderProps) {
  const { user } = useUser(userId);

  if (!user) return null;

  return (
    <div className="space-y-6">
      <BackButton href="/users" label="Back to Users" />
      <div className="flex items-center gap-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>
            <User className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <div className="flex items-center gap-3">
            <Badge className={cn("capitalize", roleColors[user.role])}>
              {user.role}
            </Badge>
            <Badge variant={user.status === "active" ? "default" : "secondary"}>
              {user.status}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
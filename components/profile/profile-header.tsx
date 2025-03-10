import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackButton } from "@/components/common/back-button";
import { useAuth } from "@/hooks/use-auth";

export function ProfileHeader() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <BackButton href="/dashboard" label="Back to Dashboard" />
      <div className="flex items-center gap-6">
        <Avatar className="h-20 w-20">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback className="text-lg">
            <User className="h-8 w-8" />
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">{user?.name}</h1>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}
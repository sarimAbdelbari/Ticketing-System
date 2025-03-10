import { Users } from "lucide-react";

export function UserHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Users className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">
            Manage system users and their roles
          </p>
        </div>
      </div>
    </div>
  );
}
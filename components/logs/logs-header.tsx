import { History } from "lucide-react";

export function LogsHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <History className="h-8 w-8 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">System Logs</h1>
          <p className="text-muted-foreground">
            Track and monitor system activities
          </p>
        </div>
      </div>
    </div>
  );
}
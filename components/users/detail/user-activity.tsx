"use client";

import { Card } from "@/components/ui/card";
import { format } from "date-fns";

interface Activity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
}

interface UserActivityProps {
  userId: string;
}

export function UserActivity({ userId }: UserActivityProps) {
  // Simulated activity data - in a real app, this would come from an API
  const activities: Activity[] = [
    {
      id: "1",
      type: "ticket",
      description: "Created ticket #1234",
      timestamp: new Date().toISOString(),
    },
    {
      id: "2",
      type: "login",
      description: "Logged in to the system",
      timestamp: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "3",
      type: "profile",
      description: "Updated profile information",
      timestamp: new Date(Date.now() - 172800000).toISOString(),
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
      <div className="relative">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="relative pl-8">
              <div className="absolute left-[9px] -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
              <div>
                <p className="font-medium">{activity.description}</p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(activity.timestamp), "PPp")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
"use client";

import { PlusIcon, BarChartIcon } from "lucide-react";
import { ButtonCustom } from "@/components/ui/button/button-custom";
import { Card } from "@/components/ui/card";

export function DashboardActions() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2">Quick Actions</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Create a new ticket or view detailed reports
        </p>
        <div className="flex gap-4">
          <ButtonCustom className="flex-1">
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Ticket
          </ButtonCustom>
          <ButtonCustom variant="outline" className="flex-1">
            <BarChartIcon className="mr-2 h-4 w-4" />
            View Reports
          </ButtonCustom>
        </div>
      </Card>
      
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <div className="space-y-4">
          {[
            "Ticket #1234 was resolved",
            "New ticket assigned to you",
            "Comment added to Ticket #5678",
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-primary mr-2" />
              {activity}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
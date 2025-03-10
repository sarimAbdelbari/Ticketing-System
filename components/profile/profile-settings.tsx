"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

interface NotificationSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

const defaultSettings: NotificationSetting[] = [
  {
    id: "email-updates",
    label: "Email Updates",
    description: "Receive email notifications about your tickets",
    enabled: true,
  },
  {
    id: "ticket-assigned",
    label: "Ticket Assignments",
    description: "Get notified when a ticket is assigned to you",
    enabled: true,
  },
  {
    id: "ticket-status",
    label: "Status Changes",
    description: "Get notified when ticket status changes",
    enabled: false,
  },
  {
    id: "marketing",
    label: "Marketing Emails",
    description: "Receive emails about new features and updates",
    enabled: false,
  },
];

export function ProfileSettings() {
  const [settings, setSettings] = useState(defaultSettings);
  const { toast } = useToast();

  const handleToggle = async (id: string) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      setSettings(settings.map((setting) =>
        setting.id === id
          ? { ...setting, enabled: !setting.enabled }
          : setting
      ));
      
      toast({
        title: "Preferences updated",
        description: "Your notification preferences have been saved.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update preferences. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <label
                  htmlFor={setting.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {setting.label}
                </label>
                <p className="text-sm text-muted-foreground">
                  {setting.description}
                </p>
              </div>
              <Switch
                id={setting.id}
                checked={setting.enabled}
                onCheckedChange={() => handleToggle(setting.id)}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
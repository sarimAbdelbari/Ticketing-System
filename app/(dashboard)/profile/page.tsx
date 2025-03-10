"use client";

import { Suspense } from "react";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileForm } from "@/components/profile/profile-form";
import { ProfileSettings } from "@/components/profile/profile-settings";
import { ProfileLoading } from "@/components/profile/profile-loading";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<ProfileLoading />}>
        <div className="max-w-4xl mx-auto space-y-8">
          <ProfileHeader />
          <div className="grid gap-8">
            <ProfileForm />
            <ProfileSettings />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
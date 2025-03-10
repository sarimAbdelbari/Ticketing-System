"use client";

import { Suspense } from "react";
import { UserDetailHeader } from "@/components/users/detail/user-detail-header";
import { UserDetailInfo } from "@/components/users/detail/user-detail-info";
import { UserActivity } from "@/components/users/detail/user-activity";
import { UserDetailLoading } from "@/components/users/detail/user-detail-loading";

export default function UserDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<UserDetailLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <UserDetailHeader userId={params.id} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <UserDetailInfo userId={params.id} />
            </div>
            <div>
              <UserActivity userId={params.id} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
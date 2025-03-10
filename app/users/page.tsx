"use client";

import { Suspense } from "react";
import { UserHeader } from "@/components/users/user-header";
import { UserFilters } from "@/components/users/user-filters";
import { UserTable } from "@/components/users/user-table";
import { UserLoading } from "@/components/users/user-loading";

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<UserLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <UserHeader />
          <UserFilters />
          <UserTable />
        </div>
      </Suspense>
    </div>
  );
}
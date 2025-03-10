"use client";

import { Suspense } from "react";
import { KnowledgeBaseHeader } from "@/components/knowledge-base/knowledge-base-header";
import { KnowledgeBaseSearch } from "@/components/knowledge-base/knowledge-base-search";
import { KnowledgeBaseList } from "@/components/knowledge-base/knowledge-base-list";
import { KnowledgeBaseLoading } from "@/components/knowledge-base/knowledge-base-loading";

export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<KnowledgeBaseLoading />}>
        <div className="max-w-7xl mx-auto space-y-8">
          <KnowledgeBaseHeader />
          <KnowledgeBaseSearch />
          <KnowledgeBaseList />
        </div>
      </Suspense>
    </div>
  );
}
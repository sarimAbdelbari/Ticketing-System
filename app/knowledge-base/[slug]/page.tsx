"use client";

import { Suspense } from "react";
import { ArticleContent } from "@/components/knowledge-base/article/article-content";
import { ArticleHeader } from "@/components/knowledge-base/article/article-header";
import { ArticleSidebar } from "@/components/knowledge-base/article/article-sidebar";
import { ArticleLoading } from "@/components/knowledge-base/article/article-loading";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-background p-8">
      <Suspense fallback={<ArticleLoading />}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <ArticleHeader slug={params.slug} />
              <ArticleContent slug={params.slug} />
            </div>
            <div className="lg:col-span-1">
              <ArticleSidebar slug={params.slug} />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
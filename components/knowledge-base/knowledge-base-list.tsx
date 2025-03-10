"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Book, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { articles } from "@/lib/data/knowledge-base";
import { EmptyState } from "@/components/common/empty-state";
import { ErrorState } from "@/components/common/error-state";
import { TablePagination } from "@/components/common/pagination";
import type { Article } from "@/lib/data/knowledge-base";

export function KnowledgeBaseList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const itemsPerPage = 6;

  if (error) {
    return (
      <ErrorState
        title="Failed to load articles"
        description="There was an error loading the knowledge base articles. Please try again."
        onRetry={() => setError(null)}
      />
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <EmptyState
        icon={Book}
        title="No articles found"
        description="Get started by creating your first knowledge base article."
        action={{
          label: "Create Article",
          onClick: () => router.push("/knowledge-base/new"),
        }}
      />
    );
  }

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const paginatedArticles = articles.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {paginatedArticles.map((article) => (
          <Card
            key={article.id}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push(`/knowledge-base/${article.id}`)}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Badge>{article.category}</Badge>
                <h3 className="text-xl font-semibold line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.readTime} min read</span>
                </div>
                <span>{format(new Date(article.createdAt), "MMM d, yyyy")}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <TablePagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
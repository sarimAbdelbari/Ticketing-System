"use client";

import Link from "next/link";
import { articles } from "@/lib/data/knowledge-base";

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const relatedArticles = articles
    .filter((article) => article.id !== currentSlug)
    .slice(0, 3);

  return (
    <div>
      <h3 className="font-semibold mb-3">Related Articles</h3>
      <div className="space-y-3">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/knowledge-base/${article.id}`}
            className="block hover:bg-muted p-2 rounded-md transition-colors"
          >
            <h4 className="font-medium line-clamp-2">{article.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
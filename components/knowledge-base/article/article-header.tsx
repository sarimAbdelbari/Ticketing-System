"use client";

import { Clock, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/common/back-button";
import { useArticle } from "@/hooks/use-article";
import { format } from "date-fns";

interface ArticleHeaderProps {
  slug: string;
}

export function ArticleHeader({ slug }: ArticleHeaderProps) {
  const { article } = useArticle(slug);

  if (!article) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <BackButton href="/knowledge-base" label="Back to Knowledge Base" />
        <Badge>{article.category}</Badge>
      </div>

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{article.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{format(new Date(article.createdAt), "MMM d, yyyy")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </div>
  );
}
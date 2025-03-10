"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useArticle } from "@/hooks/use-article";
import { RelatedArticles } from "./related-articles";
import { TableOfContents } from "./table-of-contents";

interface ArticleSidebarProps {
  slug: string;
}

export function ArticleSidebar({ slug }: ArticleSidebarProps) {
  const { article } = useArticle(slug);

  if (!article) return null;

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <TableOfContents />
      </Card>

      <Card className="p-4">
        <RelatedArticles currentSlug={slug} />
      </Card>
    </div>
  );
}
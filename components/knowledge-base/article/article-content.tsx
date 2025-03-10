"use client";

import { Card } from "@/components/ui/card";
import { useArticle } from "@/hooks/use-article";
import { ArticleFeedback } from "./article-feedback";
import { ArticleShare } from "./article-share";

interface ArticleContentProps {
  slug: string;
}

export function ArticleContent({ slug }: ArticleContentProps) {
  const { article } = useArticle(slug);

  if (!article) return null;

  return (
    <Card className="p-6">
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground mb-6">
          {article.description}
        </p>

        {/* Example content - In a real app, this would come from a CMS or database */}
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <h2>Getting Started</h2>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>

        <h2>Advanced Features</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>

        <h2>Conclusion</h2>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <hr className="my-8" />

      <div className="space-y-6">
        <ArticleFeedback />
        <ArticleShare />
      </div>
    </Card>
  );
}
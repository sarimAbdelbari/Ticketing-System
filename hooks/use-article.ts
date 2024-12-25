"use client";

import { useState, useEffect } from "react";
import { articles } from "@/lib/data/knowledge-base";
import type { Article } from "@/lib/data/knowledge-base";

export function useArticle(slug: string) {
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        const foundArticle = articles.find((a) => a.id === slug);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          throw new Error("Article not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch article"));
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return { article, isLoading, error };
}
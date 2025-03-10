"use client";

import { Button } from "@/components/ui/button";
import { Share, Twitter, Facebook, Linkedin, Link } from "lucide-react";

export function ArticleShare() {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Share this article</h3>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm">
          <Twitter className="mr-2 h-4 w-4" />
          Twitter
        </Button>
        <Button variant="outline" size="sm">
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
        <Button variant="outline" size="sm">
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopyLink}>
          <Link className="mr-2 h-4 w-4" />
          Copy Link
        </Button>
      </div>
    </div>
  );
}
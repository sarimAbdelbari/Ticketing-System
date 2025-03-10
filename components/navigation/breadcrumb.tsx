"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBreadcrumbItems } from "@/lib/utils/navigation";

export function Breadcrumb() {
  const pathname = usePathname();
  const items = getBreadcrumbItems(pathname);

  if (items.length <= 1) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="flex items-center space-x-1 text-sm text-muted-foreground overflow-x-auto pb-2 scrollbar-none"
    >
      <ol className="flex items-center space-x-1">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
            <Link
              href={item.href}
              className={cn(
                "ml-1 hover:text-foreground transition-colors line-clamp-1",
                index === items.length - 1 && "text-foreground font-medium"
              )}
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
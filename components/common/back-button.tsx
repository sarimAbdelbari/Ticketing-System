"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function BackButton({ href, label = "Back", className }: BackButtonProps) {
  const router = useRouter();

  if (href) {
    return (
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn("gap-2", className)}
      >
        <Link href={href}>
          <ArrowLeft className="h-4 w-4" />
          {label}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => router.back()}
      className={cn("gap-2", className)}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Button>
  );
}
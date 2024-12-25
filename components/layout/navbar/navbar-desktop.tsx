"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navigationLinks } from "@/lib/config/navigation";

export function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:items-center md:space-x-6">
      {navigationLinks.map((item) => {
        const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.icon && <item.icon className="mr-2 h-4 w-4" />}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
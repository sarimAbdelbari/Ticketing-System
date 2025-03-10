"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationLinks } from "@/lib/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavbarMobileProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function NavbarMobile({ isOpen, onToggle }: NavbarMobileProps) {
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={onToggle}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          {navigationLinks.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onToggle}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
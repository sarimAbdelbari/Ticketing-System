"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarLogo } from "./navbar-logo";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import { NavbarAuth } from "./navbar-auth";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container flex h-16 items-center">
        <NavbarLogo />
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <NavbarDesktop />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <NavbarAuth />
          </div>
          <NavbarMobile 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
}
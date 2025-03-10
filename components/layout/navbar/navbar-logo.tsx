import Link from "next/link";
import { Command } from "lucide-react";

export function NavbarLogo() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
        <Command className="h-4 w-4 text-primary-foreground" />
      </div>
      <span className="hidden font-bold sm:inline-block">
        CH
      </span>
    </Link>
  );
}
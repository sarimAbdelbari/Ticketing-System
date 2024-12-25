import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
  href: string;
}

export function StatsCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  href,
}: StatsCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <Icon className="h-6 w-6 text-muted-foreground" />
        <span className={cn(
          "text-sm font-medium",
          trend === "up" ? "text-green-600" : "text-red-600"
        )}>
          {change}
        </span>
      </div>
      <h3 className="text-2xl font-bold mt-4">{value}</h3>
      <p className="text-muted-foreground text-sm mt-1">{title}</p>
      <Button
        variant="ghost"
        className="w-full mt-4 justify-between"
        asChild
      >
        <Link href={href}>
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </Card>
  );
}
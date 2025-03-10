"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { cn } from "@/lib/utils";

interface CardCustomProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
}

export function CardCustom({
  title,
  description,
  className,
  children,
  footer,
  onClick,
}: CardCustomProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200",
        onClick && "cursor-pointer hover:shadow-lg",
        className
      )}
      onClick={onClick}
    >
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
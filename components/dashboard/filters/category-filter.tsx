"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        <SelectItem value="technical">Technical</SelectItem>
        <SelectItem value="billing">Billing</SelectItem>
        <SelectItem value="feature">Feature Request</SelectItem>
      </SelectContent>
    </Select>
  );
}
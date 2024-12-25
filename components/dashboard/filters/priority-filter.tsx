"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PriorityFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function PriorityFilter({ value, onChange }: PriorityFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Priorities</SelectItem>
        <SelectItem value="high">High</SelectItem>
        <SelectItem value="medium">Medium</SelectItem>
        <SelectItem value="low">Low</SelectItem>
      </SelectContent>
    </Select>
  );
}
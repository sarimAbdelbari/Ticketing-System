"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AgentFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function AgentFilter({ value, onChange }: AgentFilterProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-[180px]">
        <SelectValue placeholder="Agent" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Agents</SelectItem>
        <SelectItem value="john">John Doe</SelectItem>
        <SelectItem value="sarah">Sarah Wilson</SelectItem>
      </SelectContent>
    </Select>
  );
}
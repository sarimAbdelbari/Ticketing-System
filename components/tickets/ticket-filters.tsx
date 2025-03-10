"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchBar } from "@/components/common/search/search-bar";
import { TooltipWrapper } from "@/components/common/tooltip/tooltip-content";
import { useSearch } from "@/hooks/use-search";
import { tickets } from "@/lib/data/tickets";
import type { TicketStatus, TicketPriority } from "@/lib/types/tickets";

export function TicketFilters() {
  const [priority, setPriority] = useState<TicketPriority | "all">("all");
  const [status, setStatus] = useState<TicketStatus | "all">("all");

  const {
    searchQuery,
    setSearchQuery,
    filteredItems,
    hasResults,
  } = useSearch({
    items: tickets,
    searchFields: ["title", "assignedTo"],
    filterFields: {
      priority: priority === "all" ? undefined : priority,
      status: status === "all" ? undefined : status,
    },
  });

  const resetFilters = () => {
    setSearchQuery("");
    setPriority("all");
    setStatus("all");
  };

  const hasActiveFilters = searchQuery || priority !== "all" || status !== "all";

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search tickets..."
          className="flex-1"
        />

        <TooltipWrapper content="Filter by ticket priority level">
          <Select value={priority} onValueChange={setPriority}>
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
        </TooltipWrapper>

        <TooltipWrapper content="Filter by ticket status">
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>
        </TooltipWrapper>

        {hasActiveFilters && (
          <TooltipWrapper content="Clear all filters">
            <Button
              variant="outline"
              size="icon"
              onClick={resetFilters}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Clear filters</span>
            </Button>
          </TooltipWrapper>
        )}
      </div>
    </div>
  );
}
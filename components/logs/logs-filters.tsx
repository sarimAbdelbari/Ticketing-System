"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchBar } from "@/components/common/search/search-bar";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function LogsFilters() {
  const [search, setSearch] = useState("");
  const [eventType, setEventType] = useState("all");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const handleExport = () => {
    // Implement export functionality
    console.log("Exporting logs...");
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search logs..."
          className="flex-1"
        />

        <Select value={eventType} onValueChange={setEventType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Event Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="ticket">Ticket Events</SelectItem>
            <SelectItem value="user">User Events</SelectItem>
            <SelectItem value="system">System Events</SelectItem>
          </SelectContent>
        </Select>

        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
        />

        <Button
          variant="outline"
          className="hidden sm:flex"
          onClick={handleExport}
        >
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <Button
        variant="outline"
        className="w-full sm:hidden"
        onClick={handleExport}
      >
        <Download className="mr-2 h-4 w-4" />
        Export Logs
      </Button>
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { articles } from "@/lib/data/knowledge-base";

export function KnowledgeBaseSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="sticky top-0 z-50 bg-background py-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10 w-full"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search articles..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {articles.map((article) => (
                  <CommandItem
                    key={article.id}
                    onSelect={() => {
                      setValue(article.title);
                      setOpen(false);
                    }}
                  >
                    <div className="flex flex-col">
                      <span>{article.title}</span>
                      <span className="text-sm text-muted-foreground">
                        {article.category}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
"use client";

import { useState, useEffect, useCallback } from "react";
import { useDebounce } from "./use-debounce";

interface UseSearchProps<T> {
  items: T[];
  searchFields: (keyof T)[];
  filterFields?: Partial<Record<keyof T, T[keyof T]>>;
}

export function useSearch<T>({ items, searchFields, filterFields = {} }: UseSearchProps<T>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const debouncedSearch = useDebounce(searchQuery, 300);

  const filterItems = useCallback(() => {
    let results = items;

    // Apply search query
    if (debouncedSearch) {
      results = items.filter((item) =>
        searchFields.some((field) => {
          const value = item[field];
          return String(value)
            .toLowerCase()
            .includes(debouncedSearch.toLowerCase());
        })
      );
    }

    // Apply filters
    Object.entries(filterFields).forEach(([field, value]) => {
      if (value) {
        results = results.filter(
          (item) => item[field as keyof T] === value
        );
      }
    });

    setFilteredItems(results);
  }, [items, searchFields, filterFields, debouncedSearch]);

  useEffect(() => {
    filterItems();
  }, [filterItems]);

  return {
    searchQuery,
    setSearchQuery,
    filteredItems,
    hasResults: filteredItems.length > 0,
  };
}
"use client";

import { createContext, useState } from "react";
import type { Filters } from "@/types";

export const FiltersContext = createContext<{
  filters: Filters;
  setFilters: (filters: Filters) => void;
}>({
  filters: {
    searchTerm: '',
    categories: [],
    productTypes: [],
  },
  setFilters: () => { },
});

export function FiltersProvider({ children, }: { children: React.ReactNode}) {

  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    categories: [],
    productTypes: [],
  });

  return (
    <FiltersContext.Provider value={
      {
        filters,
        setFilters
      }
    }>
      {children}
    </FiltersContext.Provider>
  )

}
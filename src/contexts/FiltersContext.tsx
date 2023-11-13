"use client";

import { createContext } from "react";
import type { Filters } from "@/types";

export const FiltersContext = createContext<Filters>({
  searchTerm: '',
  categories: [],
  productTypes: [],
});

export function FiltersProvider({ children, }: { children: React.ReactNode}) {

  return (
    <FiltersContext.Provider value={
      {
        searchTerm: '',
        categories: [],
        productTypes: [],
      }
    }>
      {children}
    </FiltersContext.Provider>
  )

}
"use strict";

import { FiltersProvider } from "@/contexts/FiltersContext"

export default function ProductsLayout({ children, }: { children: React.ReactNode }) {

  return (
    <FiltersProvider>
      {children}
    </FiltersProvider>
  )

}
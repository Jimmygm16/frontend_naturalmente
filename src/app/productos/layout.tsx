"use strict";

import { FiltersProvider } from "@/app/Context/FiltersContext";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FiltersProvider>{children}</FiltersProvider>;
}

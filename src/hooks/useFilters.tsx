"use client";

import { Product } from "@/types";
import { useContext } from "react";
import type { Filters } from "@/types";
import { FiltersContext } from "@/app/Context/FiltersContext";

export default function useFilters(): [
  (products: Product[]) => Product[],
  Filters,
  (filters: Filters) => void
] {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products: Product[]): Product[] => {
    const { searchTerm, categories, productTypes } = filters;

    const filtered = products?.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categories.includes(product.category.id) || categories.length === 0) &&
        (productTypes.includes(product.product_type.id) ||
          productTypes.length === 0)
      );
    });

    return filtered;
  };

  return [filterProducts, filters, setFilters];
}

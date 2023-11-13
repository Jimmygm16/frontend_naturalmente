"use client";

import { Product } from "@/types";
import { useContext, useState } from "react";
import type { Filters } from "@/types";
import { FiltersContext } from "@/contexts/FiltersContext";

export default function useFilters(): [
  Product[] | [],
  (products: Product[], filters: Filters) => void
] {

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const filters = useContext(FiltersContext);

  const filterProducts = (products: Product[]) => {
    const { searchTerm, categories, productTypes } = filters;

    const filtered = products.filter((product) => {
      return (
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categories?.includes(product.category.id) || categories === null) &&
        (productTypes?.includes(product.product_type.id) || productTypes === null)
      );
    });

    setFilteredProducts(filtered);
  };

  return [filteredProducts, filterProducts];

}

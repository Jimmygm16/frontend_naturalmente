"use client";

import useFetch from "@/hooks/useFetch";
import useFilters from "@/hooks/useFilters";
import { Product } from "@/types";
import ProductCard from "../productos/ProductCard";
import Filters from "./Filters";
import Loading from "../components/Loading";

export default function ProductsPage(): JSX.Element {

  const [products, isLoading] = useFetch("/products") as [Product[], boolean];
  const [filteredProducts] = useFilters();



  return (
    <section className="h-screen">

      { isLoading && <Loading /> }
      {<section className="grid grid-cols-4 my-5">
        <Filters />

        <div className="col-span-3 flex flex-col divide-y-2 gap-y-3 divide-solid mx-[2.5%]">
          {products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>}

    </section>
  );
}

"use client";

import useFetch from "@/hooks/useFetch";
import useFilters from "@/hooks/useFilters";
import { Product } from "@/types";
import ProductCard from "../productos/ProductCard";
import Filters from "./Filters";
import Loading from "../components/Loading";
import { useState } from "react";

export default function ProductsPage(): JSX.Element {

  const [products, isLoading] = useFetch("/products") as [Product[], boolean];
   
  const [productsToShow, setProductsToShow] = useState< Product[] >(products);

  const onChangeProducts = (products: Product[]) => {
    setProductsToShow(products);
  }

  return (
    <section className="h-fit">

      { isLoading && <Loading /> }
      {<section className="grid grid-cols-4 my-5">
        <Filters 
        products={products}
        onFilterProducts={onChangeProducts} />

        <div className="col-span-3 flex flex-col divide-y-2 gap-y-3 divide-solid mx-[2.5%]">
          {productsToShow ?
           productsToShow && productsToShow.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) :
          products && products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) }
        </div>
      </section>}

    </section>
  );
}

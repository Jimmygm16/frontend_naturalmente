"use client";

import useFetch from "@/hooks/useFetch";
import { Product } from "@/types";
import { useState } from "react";
import ProductCard from "../productos/ProductCard";
import Filters from "./Filters";
import Loading from "../components/Loading";
import { useCart } from "../Context/CartContext";
import { useState } from "react";

export default function ProductsPage(): JSX.Element {
  const [products, isLoading, serProducts] = useFetch("/products") as [
    Product[],
    boolean,
    (products: Product[]) => void
  ];
  const { cartProducts } = useCart();
  const [productsToShow, setProductsToShow] = useState<Product[]>(products);

  const onChangeProducts = (products: Product[]) => {
    setProductsToShow(products);
  };

  const isInCart = (product: Product) => {
    if (cartProducts) {
      return cartProducts.some((cartProduct) => cartProduct.id === product.id);
    } else {
      return false;
    }
  };

  return (
    <section className="min-h-screen max-h-fit">
      {isLoading && <Loading />}
      {
        <section className="grid grid-cols-4 my-5">
          <Filters products={products} onFilterProducts={onChangeProducts} />

          <div className="col-span-3 flex flex-col divide-y-2 gap-y-3 divide-solid mx-[2.5%]">
            {productsToShow
              ? productsToShow &&
                productsToShow.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isInCart={isInCart(product)}
                  />
                ))
              : products &&
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isInCart={isInCart(product)}
                  />
                ))}
          </div>
        </section>
      }
    </section>
  );
}

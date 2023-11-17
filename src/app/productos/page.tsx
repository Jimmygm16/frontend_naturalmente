"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

export default function ProductsPage(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="h-screen">
      <div className="mx-[7.5%] grid grid-cols-5 my-3">
        <form className="col-span-4">
          <input
            className="w-full h-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-700 px-3"
            type="text"
            placeholder="Buscar productos"
          />
        </form>
        <div className="col-span-1 ml-2">
          <button className="w-full h-12 bg-color4 text-white rounded-lg">
            Filtros
          </button>
        </div>
      </div>

      <div className="flex flex-col divide-y-2 gap-3 divide-solid mx-[7.5%]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

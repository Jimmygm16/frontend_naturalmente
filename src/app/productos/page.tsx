"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productos";
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
        <h1>Productos</h1>
        <div className='flex flex-col divide-y-2 divide-solid mx-[7.5%]'>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  )
}
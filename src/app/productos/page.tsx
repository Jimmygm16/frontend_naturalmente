"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/productos";
import { Product } from "@/types";

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
    <div className="h-screen mt-36">
        <h1>Productos</h1>
        <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import { getProductsFromCart } from "@/services/users";

export default function CartPage(): JSX.Element {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getProductsFromCart();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className="h-screen"> 
      <div className="flex flex-col divide-y-2 gap-3 divide-solid mx-[7.5%]">
        {products.map((product) => (
          <div key={product.id} className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-3">
              <div>
                <h2 className="text-xl font-semibold">{product.product_name}</h2>
                <p className="text-gray-500">Cantidad: {product.quantity}</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <p className="text-xl font-semibold">${product.price}</p>
              <button className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white">
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )

}
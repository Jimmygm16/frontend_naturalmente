"use client";

import { useState, useEffect } from "react";
import { Product } from "@/types";
import { getSingleProduct } from "@/services/products";
import { showCurrency } from "@/helpers";
import { addProductToCart } from "@/services/users";
import IncrementalButton from "@/app/components/IncrementalButton";

export default function SingleProductPage({
  params,
}: {
  params: { id: string };
}): JSX.Element {
  const [product, setProduct] = useState<Product>();
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await getSingleProduct(params.id);
        setProduct(fetchedProduct);
        setPrice(fetchedProduct.price);
      } catch (error) {
        console.error("Error al obtener producto:", error);
      }
    }
    fetchProduct();
  }, [params.id]);

  const handlePrice = (productQuantity: number) => {
    setPrice(productQuantity * product!.price);
    setQuantity(productQuantity);
  };

  const handleAddToCart = () => {
    async function addToCart() {
      try {
        quantity > 1
          ? await addProductToCart(product!.id as number, {
              quantity: quantity,
            })
          : await addProductToCart(product!.id as number);
      } catch (error) {
        throw new Error("Error al agregar al carrito");
      }
    }
    addToCart();
  };

  return (
    <>
      <section className="h-screen grid grid-cols-2 py-3">
        <section className="w-full"></section>

        <section className="flex flex-col w-[90%] mx-auto">
          <div className="font-semibold text-4xl py-6">
            <h1> {product?.product_name} </h1>
          </div>

          <div className="flex flex-row justify-between py-5 border-t-2 border-b-2 border-gray-200 items-center">
            <span className="font-semibold text-3xl text-color4">
              {showCurrency(price) + " COP"}
              {/* {price > (product?.price as number)
                ? "  ( " + price / (product?.price as number) + " Unidades" + " )"
                : null }  */}
            </span>
            <IncrementalButton onUpdateQuantity={handlePrice} />
          </div>

          <div className="py-5 text-xl">
            <span>{product?.product_description}</span>
          </div>

          <div className="flex flex-row gap-3 py-5">
            <button className="btn w-full" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
            <button className="btn w-full bg-orange-300">Comprar</button>
          </div>
        </section>
      </section>
    </>
  );
}

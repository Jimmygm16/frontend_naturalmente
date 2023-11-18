"use client";

import CartIncrementalbutton from "./CartIncrementalButton";
import { useRouter } from "next/navigation";
import { CartProduct } from "@/types";
import { useState } from "react";
import { showCurrency } from "@/helpers";
import DeleteIcon from "@mui/icons-material/Delete";

type CartProductCardProps = {
  product: CartProduct;
};

export default function CartProductCard(
  props: CartProductCardProps
): JSX.Element {
  const [quantity, setQuantity] = useState<number>(
    props.product.pivot.orderedQuantity
  );
  const router = useRouter();

  const onUpdateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  return (
    <section className="grid grid-cols-4 py-3 px-2 bg-gray-50">
      {/* Imagen */}
      <div className=""></div>

      <div className="flex flex-col">
        <span
          className="text-left w-fit text-lg hover:text-color4 hover:cursor-pointer transition-all py-1"
          onClick={() => router.push(`/productos/${props.product.id}`)}
        >
          {props.product.name}
        </span>
        <span className="text-sm text-orange-500">
          {showCurrency(props.product.price) + " COP"}
        </span>
      </div>

      <div className="flex flex-row justify-between col-span-2 px-3">
        <div className="flex flex-row items-center justify-center gap-5">
          <CartIncrementalbutton
            onUpdateQuantity={onUpdateQuantity}
            initialQuantity={quantity}
          />
          <span className="text-lg text-center font-semibold text-orange-500">
            {showCurrency(props.product.price * quantity) + " COP"}
          </span>
        </div>

        <div className="flex items-center justify-end">
          <button className="hover:cursor-pointer hover:text-red-600 transition-colors duration-150">
            <DeleteIcon sx={{ fontSize: 40 }} />
          </button>
        </div>
      </div>
    </section>
  );
}

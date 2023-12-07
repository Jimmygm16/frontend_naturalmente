"use client";

import { Product } from "@/types";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { showCurrency } from "../../helpers";
import productoImg from "@/sources/producto-natural.png";
import Image from "next/image";

export default function ProductCard(props: {
  product: Product;
  isInCart: boolean;
}): JSX.Element {
  const router = useRouter();

  const handleClickCard = () => {
    props.isInCart
      ? router.push("/carrito")
      : router.push(`/productos/${props.product.id}`);
  };

  return (
    <section
      className="grid grid-cols-4 rounded-lg shadow-md bg-gray-100 hover:cursor-pointer hover:bg-gray-200"
      onClick={handleClickCard}
    >
      <section className="flex col-span-1 justify-center items-center">
        <Image src={productoImg} alt="producto" className="w-28 h-28" />
      </section>

      <section className="p-5 col-span-3">
        <div className="flex flex-row justify-between items-center pb-4">
          <h2 className="text-xl font-semibold">{props.product.name}</h2>
          {props.isInCart && (
            <section className="py-1.5 px-3 bg-[#A4BC92] rounded-xl">
              <ShoppingCartIcon className="text-white" />
              <span className="px-2 text-white ">Guardado!</span>
            </section>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-md font-light">
            {props.product.description}
          </span>
          <span className="text-lg font-medium">
            {showCurrency(props.product.price)}
          </span>
        </div>
      </section>
    </section>
  );
}

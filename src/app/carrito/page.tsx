"use client";

import { CartProduct } from "@/types";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import CartProductCard from "./components/CartProductCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Loading from "../components/Loading";

export default function CartPage(): JSX.Element {
  const [products, isLoading] = useFetch("/users/1/products") as [
    CartProduct[],
    boolean
  ];
  const router = useRouter();

  return (
    <>
      {isLoading && <Loading />}
      {
        <section className="min-h-screen max-h-fit lg:mx-[7.5%] my-[2.5%] grid grid-cols-3">
          <section className="col-span-2 mx-[1%]">
            <h2 className="font-light text-2xl py-3 px-4 border-2 border-gray-300 bg-opacity-80 rounded-md shadow-sm">
              EN TÚ CARRITO
            </h2>

            <div className="flex flex-col gap-2 my-2">
              {products &&
                products.map((product) => (
                  <CartProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex flex-row justify-between my-4">
              <button
                className="bg-white border-2 border-gray-300 text-xl text-black rounded-full py-3 px-6"
                onClick={() => router.push("/productos")}
              >
                <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                Seguir comprando
              </button>

              <span></span>
            </div>
          </section>

          <section className="col-span-1">
            <div></div>
          </section>
        </section>
      }
    </>
  );
}

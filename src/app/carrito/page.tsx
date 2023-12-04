"use client";

import { CartProduct } from "@/types";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import CartProductCard from "./components/CartProductCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Loading from "../components/Loading";
import CartSummary from "./components/CartSummary";
import { useAuth } from "../Context/AuthContext";
import IsAuth from "../components/IsAuth";
import { useCart } from "../Context/CartContext";

function CartPage(): JSX.Element {
  const { authUser } = useAuth();
  const { cartProducts, isLoading, setCartProducts } = useCart();

  const router = useRouter();

  const handleUpdateProducts = (products: CartProduct[]) => {
    setCartProducts(products);
  };

  return (
    <>
      {isLoading && <Loading />}
      {
        <section className="min-h-screen max-h-fit lg:mx-[6.5%] my-[2.5%] grid grid-cols-3">
          <section className="col-span-2 mx-[1%]">
            <h2 className="font-light text-2xl py-3 px-4 border-2 border-gray-300 bg-opacity-80 rounded-md shadow-sm">
              EN TÚ CARRITO
            </h2>

            <div className="flex flex-col gap-2 my-2">
              {cartProducts && cartProducts.length > 0 ? (
                cartProducts &&
                cartProducts.map((product) => (
                  <CartProductCard
                    key={product.id}
                    product={product}
                    updateProducts={handleUpdateProducts}
                  />
                ))
              ) : (
                <section className="py-[10%] bg-gray-50">
                  <span className="flex justify-center text-2xl font-light text-center text-gray-500">
                    Tu carrito aún está vacío! 😢
                  </span>
                </section>
              )}
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

          <section>
            <CartSummary products={cartProducts} />
          </section>
        </section>
      }
    </>
  );
}

export default IsAuth(CartPage);

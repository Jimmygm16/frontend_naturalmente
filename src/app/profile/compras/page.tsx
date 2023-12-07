"use client";

import { useAuth } from "@/app/Context/AuthContext";
import Loading from "@/app/components/Loading";
import useFetch from "@/hooks/useFetch";
import { Sell } from "@/types";
import BuyCard from "./components/BuyCard";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function UserBuysPage() {
  const router = useRouter();
  const { authUser } = useAuth();
  const [buys, isLoading, setBuys] = useFetch(
    `/users/${authUser?.id}/sells`
  ) as [Sell[], boolean, () => void];

  return (
    <section className="h-screen my-10">
      {isLoading && <Loading />}
      {
        <section>
          <h2 className="font-serif text-2xl py-3 px-4 mx-[20%] border-b-2 border-gray-300 bg-opacity-80 rounded-md shadow-sm">
            TUS COMPRAS!
          </h2>
          <div className="flex flex-col gap-2 my-2 mx-[20%]">
            {buys && buys.length > 0 ? (
              buys && buys.map((buy) => <BuyCard key={buy.id} sell={buy} />)
            ) : (
              <section className="py-[10%] bg-gray-50">
                <span className="flex justify-center text-2xl font-light text-center text-gray-500">
                  Aún no has hecho ninguna compra, qué esperas! 😢
                </span>
              </section>
            )}
            <div className="m-4 ml-8">
              <button
                className="bg-white border-2 border-gray-300 text-xl text-black rounded-full py-3 px-6 hover:bg-gray-200 hover:cursor-pointer"
                onClick={() => router.push("/productos")}
              >
                <ArrowBackIosIcon sx={{ fontSize: 20 }} />
                Seguir comprando
              </button>
            </div>
          </div>
        </section>
      }
    </section>
  );
}

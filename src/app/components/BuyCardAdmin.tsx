"use client";

import { formatDateString, showCurrency } from "@/helpers";
import useFetch from "@/hooks/useFetch";
import { Sell } from "@/types";
import { capitalize } from "@mui/material";
import BuySummary from "@/app/profile/compras/components/BuySummary";
import ModalCancelBuy from "@/app/profile/compras/components/ModalCancelBuy";
import Loading from "@/app/components/Loading";
import { Customer } from "@/types";

type BuyCardProps = {
  sell: Sell;
};

export default function BuyCardAdmin(props: BuyCardProps): JSX.Element {
  const [user, isLoading, setUser] = useFetch(
    `users/${props.sell.user_id}`
  ) as [Customer, boolean, () => void];

  return (
    <section className="bg-gray-50 px-6 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 w-[700px] mb-4">
      {isLoading && <Loading />}
      {
        <section className="flex flex-row justify-between border-b-2 pb-1.5 border-gray-300 gap-4">
          <span className="text-lg font-semibold">
            {capitalize(props.sell.status)}
          </span>
          <section className="flex flex-row gap-3">
            <span className="text-lg font-light">
              {`${formatDateString(props.sell?.created_at as string)}`}
            </span>
            {props.sell.status === "pending" && <ModalCancelBuy />}
          </section>
        </section>
      }
      {user && (
        <div className="flex flex-col gap-2 border-b-2 pb-1.5 border-gray-300">
          <span>
            <span className="font-semibold">Nombre: </span> {user.name}
          </span>
          <span>
            <span className="font-semibold">Dirección de entrega: </span>{" "}
            {user.address}
          </span>
          <span>
            <span className="font-semibold">Número de contacto: </span>
            {user.phone_number}
          </span>
        </div>
      )}
      {props.sell.products && <BuySummary products={props.sell.products} />}
    </section>
  );
}

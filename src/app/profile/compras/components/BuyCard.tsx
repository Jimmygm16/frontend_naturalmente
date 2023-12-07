"use client";

import { formatDateString, showCurrency } from "@/helpers";
import { Sell } from "@/types";
import { capitalize } from "@mui/material";
import { useRouter } from "next/navigation";
import BuySummary from "./BuySummary";
import ModalCancelBuy from "./ModalCancelBuy";

type BuyCardProps = {
  sell: Sell;
};

export default function BuyCard(props: BuyCardProps): JSX.Element {
  const router = useRouter();

  const handleClickCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push(`/profile/compras/${props.sell.id}`);
  };

  return (
    <section
      className="bg-gray-50 px-6 py-4 rounded-lg hover:bg-gray-100 hover:cursor-pointer transition-colors duration-300"
      onClick={handleClickCard}
    >
      <section className="flex flex-row justify-between border-b-2 pb-1.5 border-gray-300">
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
      {props.sell.products && <BuySummary products={props.sell.products} />}
    </section>
  );
}

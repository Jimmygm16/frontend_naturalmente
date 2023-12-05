"use client";

import { formatDateString, showCurrency } from "@/helpers";
import { Sell } from "@/types";
import { capitalize } from "@mui/material";
import { useRouter } from "next/navigation";
import ClearIcon from "@mui/icons-material/Clear";
import BuySummary from "./BuySummary";

type BuyCardProps = {
  sell: Sell;
};

export default function BuyCard(props: BuyCardProps): JSX.Element {
  const router = useRouter();

  const handleClickCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    router.push(`/profile/compras/${props.sell.id}`);
  };

  const handleDeleteBuy = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log("delete");
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
          {props.sell.status === "pending" && (
            <button
              className="flex items-center text-lg px-1 py-0.5 rounded-lg bg-gray-200 hover:bg-red-400 hover:text-white"
              onClick={handleDeleteBuy}
            >
              <ClearIcon sx={{ fontSize: 30 }} />
            </button>
          )}
        </section>
      </section>
      {props.sell.products && <BuySummary products={props.sell.products} />}
    </section>
  );
}

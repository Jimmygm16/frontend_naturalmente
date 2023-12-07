"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";
import { showCurrency } from "@/helpers";
import SellCard from "@/app/components/SellCard";
import { getSells } from "@/services/Sells";
import { Sell } from "@/types";

export default function Page(): JSX.Element {
  const [sells, setSells] = useState<Sell[]>([]);

  const fetchSells = async () => {
    const fetchedSells = await getSells();
    setSells(fetchedSells);
    console.log(fetchedSells);
  };

  useEffect(() => {
    fetchSells();
  }, []);

  return (
    <section className="flex flex-col items-center justify-start min-h-screen mt-10">
      <h1 className="uppercase mb-5 font-serif text-center text-2xl">
        Historial de pedidos
      </h1>
      <div className="flex flex-col items-center w-auto h-[565px]">
        {sells.map((sell: Sell) => (
          <SellCard
            key={sell.id}
            id={sell?.id as number}
            status={sell.status}
            date={sell?.created_at as string}
            total={showCurrency(sell.total_price)}
          />
        ))}
      </div>
    </section>
  );
}

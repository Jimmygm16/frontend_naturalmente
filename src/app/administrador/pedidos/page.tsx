"use client";
import React, { useState, useEffect } from "react";
import { getSells } from "@/services/Sells";
import { Sell } from "@/types";
import BuyCardAdmin from "@/app/components/BuyCardAdmin";
import isAdmin from "@/app/components/IsAdmin";

function Page(): JSX.Element {
  const [sells, setSells] = useState<Sell[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const sellsPerPage = 3; // Número de productos por página

  const fetchSells = async () => {
    const fetchedSells = await getSells();
    setSells(fetchedSells);
    console.log(fetchedSells);
  };

  useEffect(() => {
    fetchSells();
  }, []);

  const indexOfLastProduct = currentPage * sellsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - sellsPerPage;
  const currentProducts = sells.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section className="flex flex-col items-center justify-start min-h-screen max-h-fit mt-10">
      <h1 className="uppercase mb-5 font-serif text-center text-2xl">
        Historial de pedidos
      </h1>
      <div className="flex flex-col items-center gap-4 h-[565px] min-h-screen max-h-fit mb-24">
        {currentProducts.map((sell: Sell) => (
          <BuyCardAdmin key={sell.id} sell={sell} />
        ))}
      </div>
      <div className="flex flex-row mb-4 mt-32">
        {[...Array(Math.ceil(sells.length / sellsPerPage))].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className="border border-slate-300 bg-slate-100 hover:border-green-400 p-1 rounded-xl mr-2"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default isAdmin(Page);

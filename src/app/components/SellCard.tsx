"use client";
import Image from "next/image";
import pedidos from "@/sources/entregas.png";

export default function ClientCard(props: {
  id: number;
  status: string;
  date: string;
  total: number;
}) {
  return (
    <div
      className="border border-slate-400 p-4 w-96 h-28 flex flex-row
              items-center justify-between cursor-pointer hover:bg-slate-200 bg-slate-50
              font-mono"
    >
      <section className="flex flex-col m-2 w-3/4">
        <h1 className="uppercase text-sm font-semibold">{props.status}</h1>
        <span className="text-sm whitespace-normal">{props.date}</span>
        <span className="text-sm">{props.total}</span>
      </section>
      <Image className="w-10" src={pedidos} alt="" />
    </div>
  );
}

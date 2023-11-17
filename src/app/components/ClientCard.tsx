"use client";
import Image from "next/image";
import clienteImg from "@/sources/cliente.png";

export default function ClientCard(props: {
  name: string;
  email: string;
  phone_number: string;
  address: string;
}) {
  return (
    <>
      <div
        className="m-4 border-2 border-black rounded-2xl p-4 w-60 h-24 flex flex-row
                items-center justify-between cursor-pointer hover:shadow-xl bg-blue-300"
      >
        <section className="flex flex-col m-2">
          <h1 className="uppercase text-sm font-bold">{props.name}</h1>
          <span className="text-sm">{props.email}</span>
          <span className="text-sm">{props.phone_number}</span>
          <span className="text-sm">{props.address}</span>
        </section>
        <Image className="w-10" src={clienteImg} alt="" />
      </div>
    </>
  );
}

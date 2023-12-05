"use client";
import react, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../Context/AuthContext";
import pedidos from "@/sources/entregas.png";
import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    <section className="flex flex-row justify-between min-h-screen m-10">
      <div className="flex flex-col ">
        <h1>Historial de pedidos</h1>
      </div>
      <Image src={pedidos} alt="pedidos"></Image>
    </section>
  );
}

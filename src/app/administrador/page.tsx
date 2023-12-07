"use client";
import RouteCard from "@/app/components/RouteCard";
import clientesImg from "@/sources/clientes.png";
import productosImg from "@/sources/productos.png";
import pedidosImg from "@/sources/pedidos.png";
import isAdmin from "@/app/components/IsAdmin";

function page(): JSX.Element {
  return (
    <>
      <section className="m-28 min-h-screen flex flex-col">
        <RouteCard name="Clientes" img={clientesImg} route="/clientes" />
        <RouteCard
          name="Productos"
          img={productosImg}
          route="/administrador/productos"
        />
        <RouteCard
          name="Pedidos"
          img={pedidosImg}
          route="/administrador/pedidos"
        />
      </section>
    </>
  );
}

export default isAdmin(page);

"use client";
import RouteCard from "@/app/components/RouteCard";
import clientesImg from '@/sources/clientes.png'
import productosImg from '@/sources/productos.png'
import pedidosImg from '@/sources/pedidos.png'


export default function page(){
    return(
        <>
            <section className="m-8">
                <RouteCard name="Clientes" img={clientesImg} route="/clientes"/>
                <RouteCard name="Productos" img={productosImg} route="/administrador/productos"/>
                <RouteCard name="Pedidos" img={pedidosImg} route="/pedidos"/>
            </section>
            
        </>
    );
}
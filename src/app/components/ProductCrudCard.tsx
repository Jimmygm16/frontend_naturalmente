import React, {useState, useEffect} from 'react';
import { deleteProduct } from '@/services/productos';
import { showCurrency }  from '@/helpers';
import Image from 'next/image';
import ModalCrud from "@/app/components/ModalCrud";
import editar from '@/sources/lapiz.png'
import eliminar from '@/sources/borrar.png'

export default function ProductCard(props: {id:number, cardName: string, quantity:number, price:number,
    img:string, category:string, product_type:string, reloadProducts?: () => void}){
    
    let [open, setIsOpen] = useState(false);
    
    async function openModal() {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    async function deleteBtn(){
        const deletedProduct = await deleteProduct(props.id);
        if(props.reloadProducts) props.reloadProducts();
        console.log(deletedProduct);
    }

    return(
        <section>
            <ModalCrud id={props.id} isOpen = {open} closeModal={closeModal} reloadProducts = {props.reloadProducts}/>
            <div className="border border-black p-4 m-2 inline-flex w-full relative rounded-lg">
                    <img className="p-2 w-16 h-full" src="https://cdn-icons-png.flaticon.com/128/892/892917.png"/>
                <div className="m-2">
                    <h1 className="uppercase mb-2">{props.cardName}</h1>
                    <p className="card-text flex flex-col">                            
                            <span className="text-xs">{"Categoría: "+ props.category}</span>
                            <span className="text-xs">{"Tipo: "+ props.product_type}</span>
                            <span className="text-xs">{"Precio: "+ showCurrency(props.price)}</span>
                            <span className="text-xs">{"Cantidad: "+ props.quantity}</span>
                    </p>
                </div>
                <div className="absolute top-0 right-0 m-2 flex flex-col">
                    <Image src={eliminar} alt="Editar" onClick={deleteBtn} 
                    className="w-4 h-4 mb-2 mr-1 cursor-pointer"/>                     
                    <Image src= {editar} alt="Editar" onClick={openModal}
                    className="w-4 h-4 mb-1 mr-1 cursor-pointer"/>
                </div>
            </div>
        </section>
    );
}
"use client"

import { Product } from "@/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { showCurrency } from '../../helpers';

export default function ProductCard(props: {product: Product}): JSX.Element {

  const router = useRouter();

  const [isInCart, setIsInCart] = useState(true);

  const handleClickCard = () => {
    router.push(`/productos/${props.product.id}`)
  }

  return (

    <section className="grid grid-cols-4 rounded-lg shadow-md bg-gray-100 hover:cursor-pointer hover:bg-gray-200"
    onClick={handleClickCard}>

      <section className="col-span-1">

      </section>

      <section className="p-5 col-span-3">

        <div className="flex flex-row justify-between items-center pb-4">
          <h2 className="text-xl font-semibold">{props.product.product_name}</h2>
          {isInCart &&
            <section className="py-1.5 px-7 bg-[#A4BC92] rounded-xl">
              <ShoppingCartIcon className="text-white" />
            </section>
          } 
        </div>

        <div className="flex flex-col">
          <span className="text-md font-light" >{props.product.product_description}</span>
          <span className="text-lg font-medium">{showCurrency(props.product.price)}</span>
        </div>  

      </section>

    </section>

  )

}
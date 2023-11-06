"use client"

import { Product } from "@/types";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { showCurrency } from '../../helpers';

export default function ProductCard(props: {product: Product}): JSX.Element {

  const [isInCart, setIsInCart] = useState(true);

  return (

    <section className="grid grid-cols-4 rounded-lg shadow-md bg-gray-100 hover:cursor-pointer hover:bg-gray-200">

      <section className="col-span-1">

      </section>

      <section className="p-5 col-span-3">

        <div className="flex flex-row justify-between">
          <h2 className="text-md font-semibold">{props.product.product_name}</h2>
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
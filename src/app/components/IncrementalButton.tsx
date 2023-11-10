"use client";

import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type IncrementalButtonProps = {
  onUpdateQuantity: (quantity: number) => void;
}

export default function IncrementalButton(props: IncrementalButtonProps): JSX.Element {

  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeQuantity = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = event.currentTarget;
    if (name === "increment") {
      setQuantity(quantity + 1);
      props.onUpdateQuantity(quantity + 1);
    } else if (name === "decrement") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        props.onUpdateQuantity(quantity - 1);
      }
    }
  }

  return (
    <section className="fle flex-row">

      <button className="border-l border-t border-b rounded-l-full text-3xl bg-color3 px-2 py-1 items-center hover:text-gray-100"
        name="decrement"
        onClick={handleChangeQuantity}>
        <RemoveIcon />
      </button>
      <span className="text-3xl border-t border-b font-light px-4 py-1 bg-color3 ">
        {quantity}
      </span>
      <button className="border-r border-t border-b rounded-r-full text-3xl bg-color3 px-2 py-1 items-center hover:text-gray-100"
        name="increment"
        onClick={handleChangeQuantity}>
        <AddIcon />
      </button>

    </section>
  )

}
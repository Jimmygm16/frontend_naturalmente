'use client';

import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type CartIncrementalButtonProps = {
  onUpdateQuantity: (quantity: number) => void
  initialQuantity: number
}

export default function CartIncrementalbutton(props: CartIncrementalButtonProps): JSX.Element {

  const [quantity, setQuantity] = useState<number>(props.initialQuantity);

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
    <section className="flex flex-row py-1 rounde-full bg-gray-100 border-2 border-gray-300 items-center rounded-full">

      <button className="text-lg pl-2"
        name="decrement"
        onClick={handleChangeQuantity}>
        <RemoveIcon />
      </button>
      <span className="text-md font-semibold align-middle px-4">
        {quantity}
      </span>
      <button className="text-lg pr-2"
        name="increment"
        onClick={handleChangeQuantity}>
        <AddIcon />
      </button>

    </section>
  )

}
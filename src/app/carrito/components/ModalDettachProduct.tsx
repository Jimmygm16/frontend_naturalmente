"use client";

import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartProduct } from "@/types";
import { deleteProductFromCart } from "../helpers";
import Loading from "@/app/loading";

type ModalDettachProductProps = {
  product: CartProduct;
  updateProducts: (products: CartProduct[]) => void;
};

export default function ModalDettachProduct(
  props: ModalDettachProductProps
): JSX.Element {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDeleteProduct = () => {
    async function deleteProduct() {
      try {
        setIsLoading(true);
        await deleteProductFromCart(
          props.product.pivot.user_id,
          props.product.pivot.product_id
        )
          .then((response) => {
            if (response) {
              props.updateProducts(response);
            }
          })
          .finally(() => setIsLoading(false));
      } catch (error) {
        throw new Error("Error al eliminar el producto" + error);
      }
    }
    deleteProduct();
    setOpen(false);
  };

  return (
    <section>
      <button
        className="hover:text-red-600 transition-colors duration-300"
        onClick={handleOpen}
      >
        <DeleteIcon sx={{ fontSize: 30 }} />
      </button>
      {isLoading && <Loading />}
      {open && (
        <section className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
          <section className="bg-white rounded-lg w-[30%] h-[25%] flex flex-col justify-center items-center text-3xl text-center">
            <section className="mx-[5%]">
              <span>
                {`¿Estás seguro de que quieres eliminar ${
                  props.product ? props.product.name : "este producto"
                } de tu carrito de compras?`}
              </span>
              <div className="flex justify-center gap-4 mt-10">
                <button
                  className="min-w-[45%] px-2 py-1 bg-red-500 rounded-full text-2xl text-gray-50"
                  onClick={handleDeleteProduct}
                >
                  Estoy seguro
                </button>
                <button
                  className="min-w-[45%] px-2 py-2 bg-color3 rounded-full text-2xl text-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Cancelar acción
                </button>
              </div>
            </section>
          </section>
        </section>
      )}
    </section>
  );
}

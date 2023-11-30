"use client";

import { useState, createContext, useContext } from "react";
import useFetch from "@/hooks/useFetch";
import { CartProduct } from "@/types";

type CartContextProps = {
  cartProducts: CartProduct[];
  isLoading: boolean;
  setCartProducts: (products: CartProduct[]) => void;
};

const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartProducts, isLoading, setCartProducts] = useFetch(
    "/users/1/products"
  ) as [CartProduct[], boolean, (products: CartProduct[]) => void];

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        isLoading,
        setCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

"use client";

import { createContext, useContext } from "react";
import useFetch from "@/hooks/useFetch";
import { CartProduct } from "@/types";
import { useAuth } from "./AuthContext";
import {
  attachProductToCart,
  detachProductFromCart,
  updateProductQuantity,
} from "@/services/shoppingCart";

type CartContextProps = {
  cartProducts: CartProduct[];
  isLoading: boolean;
  setCartProducts: (products: CartProduct[]) => void;
  addProduct: (quantity: number, product_id: string) => void;
  removeProduct: (product: CartProduct) => void;
  updateQuantity: (quantity: number, product_id: number) => void;
};

const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { authUser } = useAuth();
  const [cartProducts, isLoading, setCartProducts] = useFetch(
    `/users/${authUser?.id as number}/products`
  ) as [CartProduct[], boolean, (products: CartProduct[]) => void];

  const addProduct = (quantity: number, product_id: string) => {
    async function addToCart() {
      try {
        const response =
          quantity > 1
            ? await attachProductToCart(authUser?.id as number, product_id, {
                orderedQuantity: quantity,
              })
            : await attachProductToCart(authUser?.id as number, product_id);
        setCartProducts(response);
      } catch (error) {
        throw new Error("Error al agregar al carrito" + error);
      }
    }
    addToCart();
  };

  const removeProduct = (product: CartProduct) => {
    async function deleteProduct() {
      try {
        await detachProductFromCart(
          product.pivot.user_id,
          product.pivot.product_id
        ).then((response) => {
          if (response) {
            setCartProducts(response);
          }
        });
      } catch (error) {
        throw new Error("Error al eliminar el producto" + error);
      }
    }
    deleteProduct();
  };

  const updateQuantity = async (quantity: number, product_id: number) => {
    try {
      const response = await updateProductQuantity(
        authUser?.id as number,
        product_id,
        quantity
      );
      setCartProducts(response);
    } catch (error) {}
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        isLoading,
        setCartProducts,
        addProduct,
        removeProduct,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart should be into the AuthProvider");
  }

  return context;
}

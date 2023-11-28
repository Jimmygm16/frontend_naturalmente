import { CartProduct } from '../../types';
import { detachProductFromCart } from '@/services/users';

export const sumAmountOfProducts = (products: CartProduct[]): number => {
  if(!products) return 0;
  return products.reduce((num,product) => {
    return num + product.pivot.orderedQuantity;
  }, 0);
}

export const sumTotalPrice = (products: CartProduct[]): number => {
  if(!products) return 0;
  return products.reduce((num,product) => {
    return num + product.price * product.pivot.orderedQuantity;
  }, 0);
}

export const getFinalPrice = (price: number): number => {
  return price * 1.26;
}

export const deleteProductFromCart = async (user_id: number | string, product_id: number | string): Promise<CartProduct[]> => {
  try {
    const updatedProducts = await detachProductFromCart(user_id, product_id);
    return updatedProducts;
  } catch(error) {
    throw error;
  }
}



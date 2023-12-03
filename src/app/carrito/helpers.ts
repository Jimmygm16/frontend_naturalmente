import { CartProduct } from '../../types';

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



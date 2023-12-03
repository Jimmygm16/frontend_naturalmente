import API from "@/API";
import { CartProduct } from "@/types";

export const attachProductToCart = async ( user_id: number | string, proudct_id: number | string, data?: { orderedQuantity: number } ): Promise<CartProduct[]> => {
  try {
    const response = data
    ? await API.post(`/users/${user_id}/products/${proudct_id}`, data)
    : await API.post(`/users/${user_id}/products/${proudct_id}`, {orderedQuantity: 1});
    return response.data.data as CartProduct[];
  } catch(error) {
    throw error;
  }
}

export const getProductsFromCart = async (user_id: number): Promise<CartProduct[]> => {
  try {
    const response = await API.get(`/users/${user_id}/products`);
    return response.data.data as CartProduct[];
  } catch(error) {
    throw error;
  }
}

export const updateProductQuantity = async (user_id: number,product_id: number ,quantity: number): Promise<CartProduct[]> => {
  try {
    const response = await API.put(`/users/${user_id}/products/${product_id}`, { orderedQuantity: quantity });
    return response.data.data as CartProduct[];
  } catch (error) {
    throw error;
  }
}

export const detachProductFromCart = async ( user_id: number | string, proudct_id: number | string ): Promise<CartProduct[]> => {
  try {
    const response = await API.delete(`/users/${user_id}/products/${proudct_id}`);
    return response.data.data as CartProduct[];
  } catch(error) {
    throw error;
  }
}

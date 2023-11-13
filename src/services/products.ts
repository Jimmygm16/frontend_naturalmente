import API from '../API'
import { Product } from '../types';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await API.get('/products');
    return response.data.data as Product[];
  } catch (error) {
    throw error;
  }
};

export const getSingleProduct = async (id: string): Promise<Product> => {
  return await API.get(`/products/${id}`).then(response => {
    return response.data.data as Product;
  }).catch(error => {
    throw error;
  });
}

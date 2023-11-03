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

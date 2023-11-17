import API from '../API'
import { Product, Category, ProductType } from '../types';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await API.get('/products');
    return response.data.data as Product[];
  } catch (error) {
    throw error;
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await API.get('/categories');
    return response.data.data as Category[];
  } catch (error) {
    throw error;
  }
}

export const getProductTypes = async (): Promise<ProductType[]> => {
  try {
    const response = await API.get('/types');
    return response.data.data as ProductType[];
  } catch (error) {
    throw error;
  }
}

export async function createProduct (product : Product): Promise<Product>{
  try {
    const response = await API.post('/products', product);
    console.log("creado");
    return response.data.data as Product;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(id: number): Promise<Product> {
  try {
    const response = await API.delete(`/products/${id}`);
    console.log("eliminado");
    return response.data.data as Product;
  } catch (error) {
    throw error;
  }
}

export async function getProduct(id:number){
  try {
    const response = await API.get(`/products/${id}`);
    return response.data.data as Product;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(product_id:number, product: Product): Promise<Product>{
  try {
    const response = await API.put(`/products/${product_id}`, product);
    console.log("actualizado");
    return response.data.data as Product;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
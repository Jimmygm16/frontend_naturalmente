import API from '../API'
import { NewUser, AuthUser, Customer, CartProduct } from '@/types'

const formatNewUser = (newUser: NewUser) => {
  return {
    name: newUser.name + ' ' + newUser.lastName,
    email: newUser.email,
    password: newUser.password
  }
}

export const registerUser = async (newUser: NewUser): Promise<Customer> => {
  try {
    newUser = formatNewUser(newUser) as NewUser;
    const response = await API.post('/auth/register', newUser);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export const loginUser = async (authUser: AuthUser): Promise<void> => {
  try {
    await API.post('/auth/login', authUser).then((response) => {
      console.log(response.headers);
      return response
    })
  } catch (error) {
    throw error;
  }
}

export const logoutUser = async (): Promise<void> => {
  try {
    const response = await API.post('/auth/logout');
    return response.data.data as void;
  } catch (error) {
    throw error;
  }
}

export const getUser = async (): Promise<Customer> => {
  try {
    const response = await API.post('/auth/profile', null, {
      withCredentials: true,
    });
    return response.data as Customer;
  } catch (error) {
    throw error;
  }
}

export const addProductToCart = async ( user_id: number | string, proudct_id: number | string, data?: { orderedQuantity: number } ): Promise<void> => {
  try {
    if(data) {
      await API.post(`/users/${user_id}/products/${proudct_id}`, data);
    } else {
      await API.post(`/users/${user_id}/products/${proudct_id}`);
    }
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

export const detachProductFromCart = async ( user_id: number | string, proudct_id: number | string ): Promise<CartProduct[]> => {
  try {
    const response = await API.delete(`/users/${user_id}/products/${proudct_id}`);
    return response.data.data as CartProduct[];
  } catch(error) {
    throw error;
  }
}

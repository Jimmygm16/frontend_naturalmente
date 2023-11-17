import API from '../API'
import { NewUser, AuthUser, User, Product, CartProduct } from '@/types'

const formatNewUser = (newUser: NewUser) => {
  return {
    name: newUser.name + ' ' + newUser.lastName,
    email: newUser.email,
    password: newUser.password
  }
}

export const registerUser = async (newUser: NewUser): Promise<User> => {
  try {
    newUser = formatNewUser(newUser) as NewUser;
    const response = await API.post('/auth/register', newUser);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}

export const loginUser = async (authUser: AuthUser): Promise<AuthUser> => {
  try {
    const response = await API.post('/auth/login', authUser);
    console.log(response.headers['set-cookie']);
    return response.data;
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

export const getUser = async (): Promise<User> => {
  try {
    const response = await API.post('/auth/profile', null, {
      withCredentials: true,
    });
    return response.data.data as User;
  } catch (error) {
    throw error;
  }
}

export const addProductToCart = async ( proudct_id: number, data?: { orderedQuantity: number } ): Promise<void> => {
  try {
    if(data) {
      await API.post(`/users/1/products/${proudct_id}`, data);
    } else {
      await API.post(`/users/1/products/${proudct_id}`);
    }
  } catch(error) {
    throw error;
  }
}

export const getProductsFromCart = async (): Promise<CartProduct[]> => {
  try {
    const response = await API.get(`/users/1/products`);
    return response.data.data as CartProduct[];
  } catch(error) {
    throw error;
  }
}

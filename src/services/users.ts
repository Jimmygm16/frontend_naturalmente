import API from '../API'
import { NewUser, AuthUser, Customer, CartProduct } from '@/types'

const formatNewUser = (newUser: NewUser) => {
  return {
    name: newUser.name + ' ' + newUser.lastName,
    email: newUser.email,
    password: newUser.password,
    phone_number: newUser.phone_number,
    address: newUser.address
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
    return response.data.data as Customer;
  } catch (error) {
    throw error;
  }
}

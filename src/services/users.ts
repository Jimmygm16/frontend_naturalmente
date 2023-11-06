import API from '../API'
import { NewUser, AuthUser, User } from '@/types'

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
    return response.data.data as AuthUser;
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
    const response = await API.post('/auth/me');
    return response.data.data as User;
  } catch (error) {
    throw error;
  }
}
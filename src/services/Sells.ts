import API from '../API'
import  { Sell }  from '@/types';
import { AxiosResponse } from 'axios';

export async function getSells(): Promise<Sell[]> {
  try {
    const response = await API.get('/sells');
    return response.data.data as Sell[];
  } catch (error) {
    throw error;
  }
}

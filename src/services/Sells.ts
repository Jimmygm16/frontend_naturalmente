import API from '../API'
import  { Sell }  from '@/types';

export async function getSells(): Promise<Sell[]> {
  try {
    const response = await API.get('/sells');
    return response.data.data as Sell[];
  } catch (error) {
    throw error;
  }
}

export const makeSell = async (sell: Sell): Promise<Sell> => {
  try {
    const response = await API.post('/sells', sell);
    return response.data.data as Sell;
  } catch (error) {
    throw error;
  }
}

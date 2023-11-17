import {Client} from "@/types";
import API from "../API"

export const getCustomers = async (): Promise<Client[]> => {
    try {
      const response = await API.get('/customers');
      return response.data.data as Client[];
    } catch (error) {
      throw error;
    }
  }
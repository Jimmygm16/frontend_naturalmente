import {Customer} from "@/types";
import API from "../API"

export const getCustomers = async (): Promise<Customer[]> => {
    try {
      const response = await API.get('/customers');
      return response.data.data as Customer[];
    } catch (error) {
      throw error;
    }
  }

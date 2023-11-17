import API from "@/API";
import type { ProductType } from "@/types";

export const getProductTypes = async (): Promise<ProductType[]> => {
  try {
    const response = await API.get("/types");
    return response.data.data as ProductType[]; 
  } catch(error) {
    throw error;
  }
}


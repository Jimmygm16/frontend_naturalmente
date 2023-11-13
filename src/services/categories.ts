import API from "@/API";
import type { Category } from "@/types";

export const getProductCategories = async (): Promise<Category[]> => {
  try {
    const response = await API.get("/categories");
    return response.data.data as Category[]; 
  } catch(error) {
    throw error;
  }
}


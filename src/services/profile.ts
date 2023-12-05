import API from "@/API";
import { Customer } from "@/types";

export type UpdateProfileData = {
  name?: string;
  email?: string;
  phone_number?: string;
  address?: string;
  profile_image?: string;
}

export const updateProfileData = async (data: UpdateProfileData, user_id: number): Promise<Customer> => {
  try {
    const response = await API.put(`/users/${user_id}`, data);
    return response.data.data as Customer;
  } catch (error) {
    throw error;
  }
}

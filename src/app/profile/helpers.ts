import { UpdateProfileData, updateProfileData } from "@/services/profile";
import { Customer } from "@/types";

export type ProfileRequiredData = {
  name: string;
  email: string;
  phone_number: string;
  address: string;
};

const getChangedFields = (originalData: Customer, newData: ProfileRequiredData): UpdateProfileData => {
  const changedFields: { [key: string]: string } = {};
  if (originalData.name !== newData.name) {
    changedFields.name = newData.name;
  }
  if (originalData.email !== newData.email) {
    changedFields.email = newData.email;
  }
  if (originalData.phone_number !== newData.phone_number) {
    changedFields.phone_number = newData.phone_number;
  }
  if (originalData.address !== newData.address) {
    changedFields.address = newData.address;
  }
  return changedFields as UpdateProfileData;
}

export const updateProfile = async (originalData: Customer, newData: ProfileRequiredData, user_id: number): Promise<Customer> => {

  try {
    await updateProfileData(newData, user_id)
      .then((response) => {
        return response
      });
  } catch (error) {
    throw error;
  }

}

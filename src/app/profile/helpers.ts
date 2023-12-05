import { UpdateProfileData, updateProfileData } from "@/services/profile";
import { Customer } from "@/types";

export type ProfileRequiredData = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

const getChangedFields = (originalData: Customer, newData: ProfileRequiredData): UpdateProfileData => {
  console.log(newData)
  const changedFields: { [key: string]: string } = {};
  if (originalData.name !== newData.name) {
    changedFields.name = newData.name;
  }
  if (originalData.email !== newData.email) {
    changedFields.email = newData.email;
  }
  if (originalData.phone_number !== newData.phone) {
    changedFields.phone_number = newData.phone;
  }
  if (originalData.addres !== newData.address) {
    changedFields.address = newData.address;
  }
  return changedFields as UpdateProfileData;
}

export const updateProfile = (originalData: Customer, newData: ProfileRequiredData, user_id: number) => {

  async function update(newData: UpdateProfileData, user_id: number) {
    try {
      const updatedUser = await updateProfileData(newData, user_id);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  const changedFields = update(getChangedFields(originalData, newData), user_id);
  console.log(changedFields);

}

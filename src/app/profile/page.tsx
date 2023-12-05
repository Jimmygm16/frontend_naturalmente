"use client";

import Image from "next/image";
import men from "../../sources/hombre.png";
import edit from "../../sources/editar.png";
import { useState } from "react";
import IsAuth from "../components/IsAuth";
import type { Customer } from "@/types";
import { useAuth } from "../Context/AuthContext";
import { KEYS_TO_EXCLUDE, FORMATED_KEYS } from "./consts";
// import { updateProfile } from "./helpers";

type ProfileRequiredData = {
  name: string;
  email: string;
  phone_number: string;
  address: string;
};

function ProfilePage(): JSX.Element {
  const [editingField, setEditingField] = useState<keyof Customer | null>(null);
  const [avatar, setAvatar] = useState(men);
  const { authUser, setAuthUserState } = useAuth();

  const hanldeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setProfile({
      ...(profile as ProfileRequiredData),
      [e.target.name]: e.target.value,
    });
  };

  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = (e) =>
  //       setChanges((prev) => ({
  //         ...prev,
  //         avatar: e.target.result as string,
  //       }));
  //     reader.readAsDataURL(event.target.files[0]);
  //   }

  const handleSetBaseUserData = (): ProfileRequiredData => {
    return {
      name: authUser ? authUser.name : "",
      email: authUser ? authUser.email : "",
      phone_number: authUser?.phone_number ? authUser.phone_number : "",
      address: authUser?.address ? authUser.address : "",
    };
  };

  const [profile, setProfile] = useState<ProfileRequiredData>(
    handleSetBaseUserData()
  );

  // const handleUpdateProfile = () => {
  //   const newProfileData = updateProfile(
  //     authUser as Customer,
  //     profile,
  //     authUser?.id as number
  //   );
  //   setAuthUserState(newProfileData);
  // };

  return (
    <section className="container mx-auto px-4 py-8 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="w-full md:w-1/4 mb-4 md:mb-0">
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden shadow-lg">
            <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
          </div>
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer flex items-center justify-center mt-2"
          >
            <Image src={edit} alt="Edit" width={60} height={60} />
            <span className="ml-2 font-bold">Editar</span>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              // onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </section>
        <section className="w-full md:w-3/4 md:ml-8">
          <h2 className="font-light text-2xl py-3 px-4 border-2 border-gray-300 bg-opacity-80 rounded-md shadow-sm">
            TUS DATOS DE USUARIO!
          </h2>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {profile &&
              Object.keys(profile as object)
                .filter((key) => !KEYS_TO_EXCLUDE.includes(key))
                .map((field, index) => (
                  <div key={field} className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor={field}
                      id={field}
                    >
                      <span className="text-xl font-semibold ">
                        {FORMATED_KEYS[index]}
                      </span>
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        name={field}
                        value={
                          profile[field as keyof ProfileRequiredData]
                            ? profile[field as keyof ProfileRequiredData]
                            : undefined
                        }
                        onChange={hanldeChange}
                        className={`shadow appearance-none border rounded text-lg w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                          editingField === field ? "bg-gray-100" : ""
                        }`}
                        disabled={editingField !== field}
                      />
                      <button
                        className="ml-2"
                        onClick={() => setEditingField(field as keyof Customer)}
                      >
                        <Image src={edit} alt="Edit" width={35} height={35} />
                      </button>
                    </div>
                  </div>
                ))}
            <div className="flex space-x-4 justify-end mt-10">
              <button
                // onClick={() =>
                //   updateProfile(
                //     authUser as Customer,
                //     profile,
                //     authUser?.id as number
                //   )
                // }
                className="btn"
              >
                Guardar cambios
              </button>
              <button
                onClick={() => {
                  setProfile(handleSetBaseUserData);
                }}
                className="btn bg-red-500"
              >
                Deshacer cambios
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default IsAuth(ProfilePage);

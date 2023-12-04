"use client";
import Image from "next/image";
import men from "../../sources/hombre.png";
import edit from "../../sources/editar.png";
import { useState } from "react";
import IsAuth from "@/app/components/IsAuth";

import { useAuth } from "@/app/Context/AuthContext";

function ProfilePage(): JSX.Element {
  const { authUser, isAuth } = useAuth();
    
interface Profile {
  name: string;
  address: string;
  email: string;
  phone: string;
}

export default function ProfilePage(): JSX.Element {
  const [profile, setProfile] = useState<Profile>({
    name: "Nombre",
    address: "Dirección",
    email: "Correo electrónico",
    phone: "Teléfono",
  });
  const [avatar, setAvatar] = useState(men);
  const [changes, setChanges] = useState<Partial<Profile> | null>(null);
  const [editingField, setEditingField] = useState<keyof Profile | null>(null);

  const handleEdit = (field: keyof Profile, newValue: string) => {
    if (editingField === field) {
      setChanges((prev) => ({ ...prev, [field]: newValue }));
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) =>
        setChanges((prev) => ({ ...prev, avatar: e.target.result as string }));
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleSave = () => {
    if (changes) {
      setProfile({ ...profile, ...changes });
      setChanges(null);
      setEditingField(null);
    }
  };

  const handleUndo = () => {
    setChanges(null);
    setEditingField(null);
  };

  const handleStartEditing = (field: keyof Profile) => {
    setEditingField(field);
  };

   return (
    <section className="container mx-auto px-4 py-8 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <section className="w-full md:w-1/4 mb-4 md:mb-0">
          <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden shadow-lg">
            <Image
              src={changes?.avatar || avatar}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <label htmlFor="avatar-upload" className="cursor-pointer flex items-center justify-center mt-2">
            <Image src={edit} alt="Edit" width={60} height={60} />
            <span className="ml-2 font-bold">Editar</span>
            <input
              id="avatar-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </section>
        <section className="w-full md:w-3/4 md:ml-8">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {Object.keys(profile).map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={(changes && changes[field]) || profile[field]}
                    onChange={(e) => handleEdit(field as keyof Profile, e.target.value)}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      editingField === field ? "bg-gray-200" : ""
                    }`}
                    disabled={editingField !== field}
                  />
                  <button className="ml-2" onClick={() => handleStartEditing(field as keyof Profile)}>
                    <Image src={edit} alt="Edit" width={20} height={20} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex space-x-4">
              <button onClick={handleSave} className="btn">
                Guardar cambios
              </button>
              <button onClick={handleUndo} className="btn bg-red-500">
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
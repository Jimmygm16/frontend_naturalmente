"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Cambiado a 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import { AuthUser, User } from "@/types";
import { loginUser } from "@/services/users";
import { HOME_PATH } from "../consts";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage(): JSX.Element {

  const router = useRouter();

  const [userCredentials, setUserCredentials] = useState<AuthUser>({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    async function fetchUser() {
      try {
        const fetchedUser = await loginUser(userCredentials);
        console.log(fetchedUser)
        router.push(HOME_PATH);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    }

    fetchUser();
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border-2 gap-3 border-green-700 grid md:grid lg:grid p-5 mx-auto my-4 min-w-screen-lg rounded-md hover:shadow-2xl">

        <div className='inline-flex'>
          <span className="text-3xl cursor-default mr-3 mt-3">
            Iniciar sesión
          </span>
          <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/892/892917.png" alt="Icono de inicio de sesión" />
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span className="mb-1 text-xs font-bold cursor-default">Correo electrónico</span>
          <input
            className="border border-green-700 rounded-sm px-2 py-1"
            type='email'
            name='email'
            value={userCredentials.email}
            placeholder="correo"
            onChange={handleInputChange}
          />
          <span className="mb-1 text-xs font-bold cursor-default ">Contraseña</span>
          <input
            className="border border-green-700 rounded-sm px-2 py-1"
            type="password"
            name='password'
            value={userCredentials.password}
            placeholder="********"
            onChange={handleInputChange}
          />
          <button className="bg-transparent hover:bg-[#DDFFBB] rounded-md text-black font-semibold py-2 px-4 border border-green-700">
            Iniciar sesión
          </button>
        </form>

      </section>
    </div>
  )
}

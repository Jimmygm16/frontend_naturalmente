"use client"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

export default function LoginPage(): JSX.Element {

  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border-2 gap-3 border-green-700 grid md:grid lg:grid p-5 mx-auto my-4 min-w-screen-lg rounded-md hover:shadow-2xl">
        <div className='inline-flex'>
          <span className="text-3xl cursor-default mr-3 mt-3">
            Iniciar sesión
          </span>
          <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/892/892917.png" alt="Icono de inicio de sesión" />
        </div>
        <label className="flex flex-col gap-1" htmlFor="correo">
          Correo electrónico
          <input
            className="border border-green-700 rounded-sm px-2 py-1"
            type="text"
            id="correo"
            value={correo}
            placeholder="correo"
            onChange={(e) => setCorreo(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="contrasena">
          Contraseña
          <input
            className="border border-green-700 rounded-sm px-2 py-1"
            type="password"
            id="contrasena"
            value={contrasena}
            placeholder="********"
            onChange={(e) => setContrasena(e.target.value)}
          />
        </label>
        <button className="bg-transparent hover:bg-[#DDFFBB] rounded-md text-black font-semibold py-2 px-4 border border-green-700">Iniciar sesión</button>
        <ToastContainer />
      </section>
    </div>
  )
}

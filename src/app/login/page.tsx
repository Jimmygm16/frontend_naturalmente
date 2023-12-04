"use client";

import { useState } from "react";
import { AuthUser } from "@/types";
import { useAuth } from "@/app/Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage(): JSX.Element {
  const { login } = useAuth();
  const router = useRouter();

  const [userCredentials, setUserCredentials] = useState<AuthUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(userCredentials);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border-2 gap-3 border-green-700 grid md:grid lg:grid p-5 mx-auto my-4 min-w-screen-lg rounded-md">
        <div className="inline-flex">
          <span className="text-3xl cursor-default mr-3 mt-3">
            Iniciar sesión
          </span>
          <img
            className="w-14"
            src="https://cdn-icons-png.flaticon.com/128/892/892917.png"
            alt="Icono de inicio de sesión"
          />
        </div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <span className="mb-1 text-xs font-bold cursor-default">
            Correo electrónico
          </span>
          <input
            className="border border-green-700 rounded-sm px-2 py-1 mb-2 focus:outline-none focus:border-2"
            type="email"
            name="email"
            value={userCredentials.email}
            placeholder="correo"
            onChange={handleInputChange}
          />
          <span className="mb-1 text-xs font-bold cursor-default ">
            Contraseña
          </span>
          <input
            className="border border-green-700 rounded-sm px-2 py-1 mb-4 focus:outline-none focus:border-2"
            type="password"
            name="password"
            value={userCredentials.password}
            placeholder="********"
            onChange={handleInputChange}
          />
          <button className="bg-transparent hover:bg-[#DDFFBB] hover:border-2 text-black font-semibold py-2 px-4 border border-green-700 mb-2">
            Iniciar sesión
          </button>
        </form>
        <section className="flex flex-row gap-2">
          <span className="text-xs font-semibold">¿No tienes una cuenta?</span>
          <Link
            href="/registro"
            className="text-xs text-green-700 font-bold hover:underline"
          >
            Registrarse
          </Link>
        </section>
      </section>
    </div>
  );
}

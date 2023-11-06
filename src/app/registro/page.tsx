// Importa los estilos de Tailwind CSS
"use client";

import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { NewUser } from '@/types';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import { registerUser } from '@/services/users';
import { LOGIN_PATH } from '../consts';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {

  /**
   * Hook uused to redirect to another page
   */
  const router = useRouter();

  const [newUser, setNewUser] = useState<NewUser>({
    name: '',
    lastName: '',
    email: '',
    password: ''
  })
  
  const [errorMessage, setErrorMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [correoValidation, setCorreoValidation] = useState(false);
  const [contrasenaValidation, setContrasenaValidation] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('Registro exitoso');
  const notify = () => toast(registerMessage, {position: toast.POSITION.TOP_CENTER});

  /**
   * Function used to handle the input change between the register form inputs and the newUser state
   * @param e The current change realized in the page
   */
  const handleImputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })

    if (e.target.name === 'password') {
      validatePassword();
    } else if (e.target.name === 'email') {
      validateEmail();
    }
  }

  const validatePassword = () => {
    if (validator.isStrongPassword(newUser.password, { 
      minLength: 8,
      minLowercase: 1, 
      minUppercase: 1,
      minNumbers: 1, 
      minSymbols: 1 
    })) { 
      setErrorMessage('Contraseña Segura'); 
      setContrasenaValidation(true);
      setRegisterMessage("Registro exitoso");;
    } else { 
      setErrorMessage('Contraseña insegura'); 
      setContrasenaValidation(false);
      setRegisterMessage("Registro fallido");
    }
  }

  const validateEmail = () => {
    if (validator.isEmail(newUser.email)) {
      setEmailMessage("Gracias");
      setCorreoValidation(true);
      setRegisterMessage("Registro exitoso");
    } else {
      setEmailMessage("Email inválido");
      setCorreoValidation(false); 
      setRegisterMessage("Registro fallido");
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!correoValidation || !contrasenaValidation) {
      setRegisterMessage("Registro fallido");
    } 
    
    /**
     * Function used to register a new user and redirect if the action is successful
     */
    async function fetchRegister() {
      try {
        await registerUser(newUser);
        setRegisterMessage('Registro exitoso');
        router.push(LOGIN_PATH);
      } catch (error) {
        console.error("Error al registrar usuario:", error);
      }
    }

    fetchRegister();
    notify();
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border-2 border-green-700 grid md:grid lg:grid p-5 mx-auto my-4 max-w-screen-md rounded-md hover:shadow-2xl">
        <div className='inline-flex'>
          <span className =" text-3xl cursor-default mr-3 mt-3">Crear cuenta</span>
          <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/892/892917.png"/>
        </div>
        <span className="mb-1 mt-3 text-xs cursor-default font-bold">Nombres</span>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            className="border border-green-700 mb-3 rounded-sm px-2 py-1"
            type="text"
            name='name'
            value={newUser.name}
            placeholder="nombres"
            onChange={handleImputChange}
          />
          <span className="mb-1 text-xs font-bold cursor-default">Apellidos </span>
          <input
            className="border border-green-700 mb-3 rounded-sm px-2 py-1"
            type="text"
            name='lastName'
            value={newUser.lastName}
            placeholder="apellidos"
            onChange={handleImputChange}
          />
          <span className="mb-1 text-xs font-bold cursor-default">Correo electrónico</span>
          <input
            className="border border-green-700 rounded-sm px-2 py-1"
            type='email'
            name='email'
            value={newUser.email}
            placeholder="correo"
            onChange={handleImputChange}
          />
          <span className="text-xs mb-1 cursor-default">{emailMessage}</span>
          <span className="mb-1 text-xs font-bold cursor-default ">Contraseña</span>
          <input
            className="border border-green-700 rounded-sm px-2 py-1"
            type="password"
            name='password'
            value={newUser.password}
            placeholder="********"
            onChange={handleImputChange}
          />
          <span className="text-xs mb-3 cursor-default">{errorMessage}</span>
          <button className ="bg-transparent hover:bg-[#DDFFBB] rounded-md text-black font-semibold py-2 px-4 border border-green-700">
            Registrarse
          </button>
          <ToastContainer/>
        </form>
      </section>
    </div>
  );
}
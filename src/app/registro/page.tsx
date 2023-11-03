// Importa los estilos de Tailwind CSS
"use client";
import 'tailwindcss/tailwind.css';
import React, { useState, useEffect } from 'react';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
  
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [correoValidation, setCorreoValidation] = useState(false);
  const [contrasenaValidation, setContrasenaValidation] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('Registro exitoso');
  const notify = () => toast(registerMessage, {position: toast.POSITION.TOP_CENTER});

  let user: any = {
    nombres: nombres,
    apellidos: apellidos,
    correo: correo,
    contrasena: contrasena
  }

  useEffect(() => {
    if (validator.isStrongPassword(contrasena, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setErrorMessage('Contraseña Segura'); 
            setContrasenaValidation(true);
            setRegisterMessage("Registro exitoso");
            console.log(registerMessage);
        } else { 
            setErrorMessage('Contraseña insegura'); 
            setContrasenaValidation(false);
            setRegisterMessage("Registro fallido");
        }
  }), [contrasena];
  
  useEffect(() => {
    if (validator.isEmail(correo)) {
        setEmailMessage("Gracias");
        setCorreoValidation(true);
        setRegisterMessage("Registro exitoso");
    } else {
        setEmailMessage("Email inválido");
        setCorreoValidation(false); 
        setRegisterMessage("Registro fallido");
    }
  }, [correo]);

  const handleRegistrar = () => {
    if (correoValidation && contrasenaValidation) {
        console.log(nombres, apellidos, correo, contrasena);
        user['nombres'] = nombres;
        user['apellidos'] = apellidos;
        user['correo'] = correo;
        user['contrasena'] = contrasena;
        setNombres('');
        setApellidos('');
        setCorreo('');
        setContrasena('');
        setRegisterMessage("Registro exitoso");
    }else{
      setRegisterMessage("Registro fallido");
    }
    notify();
    console.log(user);
    setRegisterMessage("Registro fallido");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <section className="border-2 border-green-700 grid md:grid lg:grid p-5 mx-auto my-4 max-w-screen-md rounded-md hover:shadow-2xl">
        <div className='inline-flex'>
          <span className =" text-3xl cursor-default mr-3 mt-3">Crear cuenta</span>
          <img className="w-14" src="https://cdn-icons-png.flaticon.com/128/892/892917.png"/>
        </div>
        <span className="mb-1 mt-3 text-xs cursor-default font-bold">Nombres</span>
        <input
          className="border  border-green-700 mb-3 rounded-sm px-2 py-1"
          type="text"
          value={nombres}
          placeholder="nombres"
          onChange={(e) => setNombres(e.target.value)}
        />
        <span className="mb-1 text-xs font-bold cursor-default">Apellidos </span>
        <input
          className="border border-green-700 mb-3 rounded-sm px-2 py-1"
          type="text"
          value={apellidos}
          placeholder="apellidos"
          onChange={(e) => setApellidos(e.target.value)}
        />
        <span className="mb-1 text-xs font-bold cursor-default">Correo electrónico</span>
        <input
          className="border border-green-700 rounded-sm px-2 py-1"
          type="text"
          value={correo}
          placeholder="correo"
          onChange={(e) => setCorreo(e.target.value)}
        />
        <span className="text-xs mb-1 cursor-default">{emailMessage}</span>
        <span className="mb-1 text-xs font-bold cursor-default ">Contraseña</span>
        <input
          className="border border-green-700 rounded-sm px-2 py-1"
          type="password"
          value={contrasena}
          placeholder="********"
          onChange={(e) => setContrasena(e.target.value)}
        />
        <span className="text-xs mb-3 cursor-default">{errorMessage}</span>
        <button className ="bg-transparent hover:bg-[#DDFFBB] rounded-md text-black font-semibold py-2 px-4 border border-green-700"
        onClick={handleRegistrar}>Registrarse</button>
        <ToastContainer/>
      </section>
    </div>
  );
}
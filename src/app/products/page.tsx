
"use client"
import { useState } from 'react';
import { useProductLogic } from './ProductLogic';
import ProductComponent from '../components/Product';
export default function Product():JSX.Element {

  const {
    categorias,
    precios,
    tiposProducto,
    cantidades,
    openSection,
    searchTerm,
    toggleSection,
    setSearchTerm,
    filteredProducts,
  } = useProductLogic();


  return (
    <div className="h-screen flex mb-10 mt-28">
      <div className="w-full lg:w-1/4 p-4 bg-slate-50 rounded-2xl overflow-auto font-mono text-gray-600">
        <input
          type="search"
          placeholder="Buscar Productos ....."
          className="w-full mb-4 p-2 border-gray-300 rounded-2xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h1 className="text-xl mb-4 font-bold">Filtros</h1>
        {['Categoría', 'Precio', 'Tipo de producto', 'Cantidad'].map((section, index) => {
          let tasks;
          switch (section) {
            case 'Categoría':
              tasks = categorias;
              break;
            case 'Precio':
              tasks = precios;
              break;
            case 'Tipo de producto':
              tasks = tiposProducto;
              break;
            case 'Cantidad':
              tasks = cantidades;
              break;
            default:
              tasks = [];
          }

          return (
            <div key={section}>
              <button className="w-full text-left py-2" onClick={() => toggleSection(section)}>
                {section}
              </button>
              {openSection === section && (
                <ul className="pl-4 mb-4">
                  {tasks.map((task) => (
                    <li key={task} className="flex items-center space-x-2">
                      <input type="checkbox" id={task.toString()} name={task.toString()} />
                      <label htmlFor={task.toString()}>{task}</label>
                    </li>
                  ))}
                </ul>
              )}
              <hr className="my-4" />
            </div>
          );
        })}
        <button className="w-full mt-10 btn">Cargar filtros</button>
      </div>
      <ProductComponent/>
    </div>
  );
}
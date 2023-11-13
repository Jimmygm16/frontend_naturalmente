"use client";

import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { Category, ProductType } from "@/types";
import Loading from "../components/Loading";

export default function Filters(): JSX.Element {

  const [categories, isLoadingCategories] = useFetch("/categories");
  const [productTypes, isLoadingTypes] = useFetch("/types");

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  if (isLoadingCategories || isLoadingTypes) {
    return (
      <></>
    )
  }

  return (
    <div className="w-full lg:col-span-1 p-4 bg-slate-50 rounded-2xl overflow-auto text-gray-600 mx-auto">
      <form>
        <input
          type="search"
          placeholder="Buscar Productos"
          className="w-full mb-4 p-2 border-gray-300 rounded-2xl"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <h1 className="text-xl mb-4 font-bold">Filtros</h1>
      {["Categoría", "Precio", "Tipo de producto", "Cantidad"].map(
        (section ) => {
          let tasks: Category[] | ProductType[] = [];
          switch (section) {
            case "Categoría":
              tasks = categories as Category[];
              break;
            // case "Precio":
            //   tasks = precios;
            //   break;
            case "Tipo de producto":
              tasks = productTypes as ProductType[];
              break;
            // case 'Cantidad':
            //   tasks = cantidades;
            //   break;
            default:
              tasks = [];
          }

          return (
            <div key={section}>
              <button
                className="w-full text-left py-2"
                onClick={() => toggleSection(section)}
              >
                {section}
              </button>

              {openSection === section && (
                <ul className="pl-4 mb-4">
                  {tasks.map((task) => (
                    <li key={task.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={task.toString()}
                        name={task.toString()}
                      />
                      <label htmlFor={task.name}>{task.name}</label>
                    </li>
                  ))}
                </ul>
              )}
              <hr className="my-4" />
            </div>
          );
        }
      )}

      <button className="w-full mt-10 btn">Cargar filtros</button>
    </div>
  )

}
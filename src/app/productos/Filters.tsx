"use client";

import { useState } from "react";
import useFetch from "@/hooks/useFetch";
import { Category, Filters, Product, ProductType } from "@/types";
import useFilters from "@/hooks/useFilters";

type filtersProps = {
  products: Product[];
  onFilterProducts: (products: Product[]) => void;
};

export default function Filters(props: filtersProps): JSX.Element {
  const [categories, isLoadingCategories] = useFetch("/categories");
  const [productTypes, isLoadingTypes] = useFetch("/types");
  const [filterProducts, filters, setFilters] = useFilters();

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleChangeSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      searchTerm: e.target.value,
    });
  };

  const handleAddFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, checked, id } = e.target;

    if (name === "Categoría") {
      name = "categories";
    } else if (name === "Tipo de producto") {
      name = "productTypes";
    }

    if (checked) {
      setFilters({
        ...filters,
        [name]: [...(filters[name as keyof Filters] as number[]), parseInt(id)],
      });
    } else {
      setFilters({
        ...filters,
        [name]: (filters[name as keyof Filters] as number[]).filter(
          (item) => item !== parseInt(id)
        ),
      });
    }
  };

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onFilterProducts(filterProducts(props.products));
  };

  const handleClickFilters = () => {
    props.onFilterProducts(filterProducts(props.products));
  };

  if (isLoadingCategories || isLoadingTypes) {
    return <></>;
  }

  return (
    <div className="w-full lg:col-span-1 p-4 bg-slate-50 rounded-2xl overflow-auto text-gray-600 mx-auto">
      <form onSubmit={onSearch}>
        <input
          type="search"
          placeholder="Buscar Productos"
          className="w-full mb-4 p-2 border-gray-300 rounded-2xl"
          value={filters.searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </form>
      <h1 className="text-xl mb-4 font-bold">Filtros</h1>
      {["Categoría", "Tipo de producto"].map((section) => {
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
                      id={task.id.toString()}
                      name={section}
                      onChange={handleAddFilters}
                    />
                    <label htmlFor={task.name}>{task.name}</label>
                  </li>
                ))}
              </ul>
            )}
            <hr className="my-4" />
          </div>
        );
      })}

      <button className="w-full mt-10 btn" onClick={handleClickFilters}>
        Cargar filtros
      </button>
    </div>
  );
}


import { useState } from 'react';
export function useProductLogic() {
    const data ={
        "productos_naturistas": [
          {
            "category": "Suplementos",
            "price": 29.99,
            "quantity": 50,
            "tipo_producto": "Multivitamínico"
          },
          {
            "category": "Té de hierbas",
            "price": 7.99,
            "quantity": 100,
            "tipo_producto": "Té de manzanilla"
          },
          {
            "category": "Aceites esenciales",
            "price": 14.99,
            "quantity": 30,
            "tipo_producto": "Aceite de lavanda"
          },
          {
            "category": "Miel cruda",
            "price": 12.99,
            "quantity": 20,
            "tipo_producto": "Miel de abeja"
          },
          {
            "category": "Hierbas a granel",
            "price": 4.99,
            "quantity": 200,
            "tipo_producto": "Albahaca seca"
          },
          {
            "category": "Alimentos naturales",
            "price": 3.49,
            "quantity": 50,
            "tipo_producto": "Quinua orgánica"
          },
          {
            "category": "Suplementos",
            "price": 19.99,
            "quantity": 40,
            "tipo_producto": "Superalimento en polvo"
          },
          {
            "category": "Aceites esenciales",
            "price": 9.99,
            "quantity": 25,
            "tipo_producto": "Aceite de árbol de té"
          },
          {
            "category": "Hierbas a granel",
            "price": 6.99,
            "quantity": 150,
            "tipo_producto": "Jengibre seco"
          },
          {
            "category": "Alimentos naturales",
            "price": 5.99,
            "quantity": 60,
            "tipo_producto": "Chía orgánica"
          }
        ]
      }


      

  // Extract unique values for each filter
  const categorias = [...new Set(data.productos_naturistas.map((producto) => producto.category))];
  const precios = [...new Set(data.productos_naturistas.map((producto) => producto.price))];
  const tiposProducto = [...new Set(data.productos_naturistas.map((producto) => producto.tipo_producto))];
  const cantidades = [...new Set(data.productos_naturistas.map((producto) => producto.quantity))];

  const [openSection, setOpenSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const filteredProducts = data.productos_naturistas.filter((producto) =>
    producto.tipo_producto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    categorias,
    precios,
    tiposProducto,
    cantidades,
    openSection,
    searchTerm,
    toggleSection,
    setSearchTerm,
    filteredProducts,
  };
}

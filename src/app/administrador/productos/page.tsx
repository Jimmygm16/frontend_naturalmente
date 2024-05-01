"use client";
import React, { useState, useEffect } from "react";
import { Product } from "@/types";
import ProductCrudCard from "@/app/components/ProductCrudCard";
import FormCrudProduct from "@/app/components/FormCrudProduct";
import { getProducts } from "@/services/products";
import isAdmin from "@/app/components/IsAdmin";

function Page(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; // Número de productos por página

  async function fetchProducts() {
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
  }

  const reloadProducts = async () => {
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Calcula el índice de inicio y fin de los productos a mostrar en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambia de página
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="p-4 flex justify-evenly items-center h-2/3">
      <div className="p-4 cursor-default flex flex-col w-1/4 h-[630px] overflow-y-auto relative">
        {currentProducts.map((product: any) => (
          <ProductCrudCard
            key={product.id}
            id={product.id}
            cardName={product.name}
            category={product["category"].name}
            product_type={product["product_type"].name}
            price={product.price}
            quantity={product.quantity}
            img={product.img}
            reloadProducts={reloadProducts}
          />
        ))}
        <div
          className="p-4 flex justify-end absolute bottom-9
        left-1/2 transform -translate-x-1/2 -translate-y-0"
        >
          {[...Array(Math.ceil(products.length / productsPerPage))].map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className="border border-slate-300 bg-slate-100 hover:border-green-400 p-1 rounded-xl mr-2"
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
      <FormCrudProduct reloadProducts={reloadProducts} />
    </section>
  );
}

export default Page;
// export default isAdmin(Page);

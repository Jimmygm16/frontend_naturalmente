"use client";
import React, { useState, useEffect } from 'react';
import ComboBox from '../../components/ComboBox';

async function getProducts(){
    const res = await fetch('http://localhost:8000/api/v1/products', {cache:'force-cache'});
    const products = await res.json();
    return products.data;
}

async function getCategories(){
    const res = await fetch('http://localhost:8000/api/v1/categories', {cache:'force-cache'});
    const categories = await res.json();
    return categories.data;
}

async function getTypes(){
    const res = await fetch('http://localhost:8000/api/v1/types', {cache:'force-cache'});
    const types = await res.json();
    return types.data;
}

export default function page() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const products = await getProducts();
            setProducts(products);
            console.log(products);
        }
        async function fetchCategories() {
            const categories = await getCategories();
            setCategories(categories);
            console.log(categories);
        }
        async function fetchTypes() {
            const types = await getTypes();
            setTypes(types);
            console.log(types);
        }
        fetchData();
        fetchTypes();
        fetchCategories();
    }, []);

    return(
        <section className="p-4 inline-flex">
            <div className="border border-black p-4 my-auto mx-auto">
                <ul>
                {products.map((product: any) => (
                    <li key={product.id}>{product.name}</li>
                ))}
                </ul>
            </div>
            <div className="p-6 flex flex-col border border-black ml-4">
                <span className="text-xs">Nombre del producto</span>
                <input className="border border-black mb-2 px-1" type="text"/>
                <span className="text-xs">Descripción</span>
                <textarea id="productDescription" name="productDescription" 
                className="w-full h-32 px-1 text-base border border-black"></textarea>
                <span className="text-xs">Precio</span>
                <input className="border border-black mb-2 px-1" type="text"/>
                <span className="text-xs">Categoría</span>
                <ComboBox elementList={categories}/>
                <span className="text-xs">Tipo de producto</span>
                <ComboBox elementList={types}/>
                <span className="text-xs">Cantidad</span>
                <input className="border border-black mb-2 px-1" type="text"/>
                <span className="text-xs">img</span>
                <input className="" type="file"/>
            </div>
        </section>
    );
}

            //'name' => 'Ginkgo Biloba',
            //'description' => 'Test Product Description',
            //'price' => 100,
            //'category' => 1,
            //'product_type' => 1,
            //'quantity' => 1,
            //'img' => '',
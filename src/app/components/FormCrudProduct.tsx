"use client";
import React, { useState, useEffect } from 'react';
import ComboBox from '@/app/components/ComboBox';
import {Product, Category, ProductType} from '@/types'
import { getProducts, getCategories, getProductTypes, getProduct, createProduct, updateProduct} from "@/services/productos";
import { Try } from '@mui/icons-material';

export default function FormCrudProduct(props: {id?: number, reloadProducts?: () => void}) {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [types, setTypes] = useState<ProductType[]>([]);
    const [categoria, setCategoria] = useState(1);
    const [tipo, setTipo] = useState(1);//parametros_producto
    const [product_components, setProduct] = useState({
        name: '' ,
        description: '',
        price:'',
        category: 1,
        product_type: 1,
        quantity: '',
        img: ''
    });
    
    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setProduct({ ...product_components, [name]: value });
    };

    const handleCategoria = (id: number) => {
        setCategoria(id);
        setProduct({ ...product_components, ["category"]: id });
    };

    const handleType = (id: number) => {
        setTipo(id);
        setProduct({ ...product_components, ["product_type"]: id });
    };

    async function fetchPossibleProduct(){
        if(props.id){
            const product = await getProduct(props.id);
            console.log(product);
            product_components.name = product.name;
            product_components.description = product.description;
            product_components.price = product.price.toString();
            product_components.quantity = product.quantity.toString();
            }
    }

    async function handleProduct(){
        try{
            if (props.id){
                const response = await updateProduct(props.id, product);
                console.log(response);
            }else{
                const response = await createProduct(product);
                console.log(response);
            }
        }
        catch(e){
            console.log(e);
        }   
        if(props.reloadProducts) props.reloadProducts();
    }

    let product: Product = {
        name: product_components.name,
        description: product_components.description,
        price: parseInt(product_components.price),
        category: product_components.category,
        product_type: product_components.product_type,
        quantity: parseInt(product_components.quantity),
        img: product_components.img
    }

    useEffect(() => {
        async function fetchData() {
            const [fetchedProducts, fetchedCategories, fetchedTypes] = await Promise.all([
                getProducts(),
                getCategories(),
                getProductTypes()
            ]);
            setProducts(fetchedProducts);
            setCategories(fetchedCategories);
            setTypes(fetchedTypes);
            console.log(fetchedProducts);
            console.log(fetchedCategories);
            console.log(fetchedTypes);
        }
        fetchPossibleProduct();
        fetchData();
    }, []);

    return (
        <div className="p-5 flex flex-col border border-black rounded-lg bg-gray-50 ">
            <span className="text-xs">Nombre del producto</span>
            <input className="border-b border-black mb-2 px-1
            focus:outline-none focus:border-green-400" type="text"
            onChange={handleInputChange} value = {product_components.name} name = "name"/>
            <span className="text-xs">Descripción</span>
            <textarea id="productDescription" className="w-full h-32 px-1 text-base 
            border border-black rounded-md focus:border-green-400 focus:outline-none"
            onChange={handleInputChange} value={product_components.description} name="description"></textarea>
            <span className="text-xs">Precio</span>
            <input className="border-b border-black mb-2 px-1 
            focus:border-green-400 focus:outline-none " type="text"
            onChange={handleInputChange}
            value={product_components.price} name="price"/>
            <span className="text-xs">Categoría</span>
            <ComboBox elementList={categories} value={categoria} onChange={handleCategoria}/>
            <span className="text-xs">Tipo de producto</span>
            <ComboBox elementList={types} value={tipo} onChange={handleType}/>
            <span className="text-xs">Cantidad</span>
            <input className="border-b border-black mb-2 px-1 
            focus:border-green-400 focus:outline-none" type="number"
            onChange={handleInputChange}
            value={product_components.quantity} name ="quantity"/>
            <span className="text-xs">img</span>
            <div className="inline-flex">
                <input className="w-60" type = "file" onChange={handleInputChange}/>
                <button className="border border-black rounded-2xl p-2"
                onClick={handleProduct}
                >Aceptar</button>
            </div>
        </div>
    )
}
'use client'
import Appbar from '@/app/components/Appbar';
import Bottom from '@/app/components/Bottom';
import Drawer from '@/app/components/Drawer';
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, {useEffect, useState} from 'react';
import 'tailwindcss/tailwind.css'
import { fetchProducts } from '@/app/utils/api'

const ProductsPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState();

  const handleMenuToggle  = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const { data: session } = useSession();
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const productsData = await fetchProducts();
        setProducts(productsData);
    }
    getProducts();
  }, []);

  return (
    <main className="min-h-screen">
      <Appbar onMenuToggle={handleMenuToggle}></Appbar>
      <Drawer isOpen={isDrawerOpen} onClose={handleMenuToggle}></Drawer>

      <h1> Produtos da Loja Virtual </h1>
      <ul>
        {products.map((product) =>(
            <li key={product.id}>
                <img src={product.image} width={200}></img>
                <p>{product.title}</p>
                <p>{product.price}</p> 
                <p>{product.description}</p>
                <p>{product.category} </p>
                <button>Add cart</button>
            </li>
        ))}

      </ul>
      <Bottom></Bottom>
    </main>
  );

}
export default ProductsPage;
"use client"
import React from 'react'
import { useParams } from "next/navigation";
import { useGetSingleProductsQuery } from '@/Redux/Slices/apiSlice';
import Loader from '@/components/Loader/Loader';
import ProductDetails from '@/Views/ProductDetails/ProductDetails';

export default function Page() {
    const { id } = useParams(); 
    const { data: product, error, isLoading } = useGetSingleProductsQuery(id);
 console.log(product)
  return (
    <div>
    {isLoading? <Loader/>:error?"Something went wrong, please try again":<ProductDetails data={product}/>}
    </div>
  )
}

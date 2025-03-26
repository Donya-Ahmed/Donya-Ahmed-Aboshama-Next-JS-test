
// import styles from "./page.module.css";
"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import Loader from "@/components/Loader/Loader";
import { useGetProductsQuery } from "@/Redux/Slices/apiSlice";
import ProductsView from "@/Views/ProductsView/ProductsView";

export default function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery({});
 console.log(products)
  return (
 <div>
  <HeroSection title={"Fashion"}/>
   {isLoading? <Loader/>:error?"Something went wrong, please try again": <ProductsView data={products}/>}
 </div>
  );
}

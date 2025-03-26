
"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import Loader from "@/components/Loader/Loader";
import { useGetProductsQuery } from "@/Redux/Slices/apiSlice";
import ProductsView from "@/Views/ProductsView/ProductsView";

export default function Page() {
  const { data: products, error, isLoading } = useGetProductsQuery({});
  return (
 <div>
  <HeroSection title={"Fashion"} header={"Fashion"}/>
   {isLoading? <Loader/>:error?"Something went wrong, please try again": <ProductsView data={products}/>}
 </div>
  );
}

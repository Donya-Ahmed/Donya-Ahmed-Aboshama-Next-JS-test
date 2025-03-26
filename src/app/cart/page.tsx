"use client";
import EmptyCart from "@/components/EmptyCart/EmptyCart";
import HeroSection from "@/components/HeroSection/HeroSection";
import Loader from "@/components/Loader/Loader";
import {
  useGetProductsQuery,
  useGetSingleProductsQuery,
} from "@/Redux/Slices/apiSlice";
import { RootState } from "@/Redux/store";
import ProductInterface from "@/Types/Interfaces/ProductInterface";
import CartDetails from "@/Views/CartDetails/CartDetails";
import ProductsView from "@/Views/ProductsView/ProductsView";
import { useSelector } from "react-redux";

export default function Page() {
  const cartData: ProductInterface[] = useSelector(
    (state: RootState) => state.cart.cartData
  );
  return (
    <div>
      <HeroSection title={"Your Shopping Cart"} header={"Shopping Cart"} />
      {cartData.length > 0 ? <CartDetails data={cartData} /> : <EmptyCart/>}
    </div>
  );
}

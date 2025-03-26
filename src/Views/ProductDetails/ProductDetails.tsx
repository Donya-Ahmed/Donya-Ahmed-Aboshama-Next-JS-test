import ProductInterface from "@/Types/Interfaces/ProductInterface";
import React, { useState } from "react";
import Image from "next/image";
import StarRating from "@/components/StarRating/StarRating";
import styles from "./ProductDetails.module.css";
import OldPrice from "@/components/OldPrice/OldPrice";
import SaleBadge from "@/components/SaleBadge/SaleBadge";
import StockState from "@/components/StockState/StockState";
import QuantityData from "@/components/QuantityData/QuantityData";
import OutlineButton from "@/components/Button/OutlineButton";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoGiftOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {addToCart} from "@/Redux/Slices/cartSlice"
export default function ProductDetails({ data }: { data: ProductInterface }) {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch()
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const addProductToCart=()=>{
    dispatch(addToCart({product:{...data,quantity:count},count:count}))
  }
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 mt-20">
      <div>
        <Image
          src={data.image}
          alt={data.title}
          className="w-[70%] mx-auto  object-cover"
          priority={true}
          width={100}
          height={100}
        />
      </div>
      <div>
        <p className={styles.logo}>Fasco</p>
        <p className={styles.productTitle}>{data.title}</p>
        <StarRating rating={data.rating.rate} />
        <div className="flex items-center gap-2 mt-5">
          <div className="flex items-center gap-2">
            <div className={styles.currentPrice}>$ {data.price}</div>
            <OldPrice oldPrice={"$20"} />
          </div>
          <SaleBadge sale={33} />
        </div>
        <div className="flex items-center gap-2 mt-3">
          <div className={styles.category}>Category :</div>
          <div className={styles.categoryData}> {data.category}</div>
        </div>
        <div className={`mt-5 ${styles.description} mb-8`}>
          {data.description}
        </div>
        <StockState count={data.rating.count} />
        <div className="mb-16">
          <p className={`${styles.quentityTitle} mt-14 mb-3`}>Quantity</p>
          <div className="flex items-center justify-between gap-8">
            <QuantityData
              quantity={count}
              increase={increaseCount}
              decrease={decreaseCount}
            />
            <OutlineButton
              onClick={addProductToCart}
              titleBtn={"Add to cart"}
            />
          </div>
        </div>
        <div className={`${styles.shareBox}`}>
          <IoShareSocialOutline size={18} /> <span>Share</span>
        </div>
        <div className="mt-8 mb-8">
          <div className="flex items-center  gap-1 mb-2">
            <div className="flex items-center  gap-1">
              <IoCartOutline size={18} />{" "}
              <span className={styles.label}>Estimated Delivery:</span>
            </div>
            <span className={styles.labelData}>Jul 30 - Aug 03</span>
          </div>
          <div className="flex items-center  gap-1 ">
            <div className="flex items-center  gap-1">
              <IoGiftOutline size={18} />{" "}
              <span className={styles.label}>Free Shipping & Returns:</span>
            </div>
            <span className={styles.labelData}> On all orders over $75</span>
          </div>
        </div>
        <div className={styles.visaContainer}>
          <Image
            src={"/images/visa.png"}
            alt={"visa"}
            className="w-[50%]"
            priority={true}
            width={100}
            height={100}
          />
          <p className={styles.visadescription}>Guarantee safe & secure checkout</p>
        </div>
      </div>
    </div>
  );
}

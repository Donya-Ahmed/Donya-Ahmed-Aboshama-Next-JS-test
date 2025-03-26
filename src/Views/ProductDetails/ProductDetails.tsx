import ProductInterface from "@/Types/Interfaces/ProductInterface";
import React from "react";
import Image from "next/image";
import StarRating from "@/components/StarRating/StarRating";

export default function ProductDetails({ data }: { data: ProductInterface }) {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 ">
      <div>
        <Image
          src={data.image}
          alt={data.title}
          className="w-full  object-cover"
          priority={true}
          width={100}
          height={100}
        />
      </div>
      <div>
        <p >Fasco</p>
        <p>{data.title}</p>
        <StarRating rating={data.rating.rate}/>
      </div>
    </div>
  );
}

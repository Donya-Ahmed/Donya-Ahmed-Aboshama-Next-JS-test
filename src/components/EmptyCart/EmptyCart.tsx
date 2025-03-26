import React from "react";
import Image from "next/image";

export default function EmptyCart() {
  return (
    <div>
      <Image
        src={"/images/empty-cart.png"}
        alt={"empty"}
        className="w-[130px]  object-cover mx-auto mt-12 -rotate-6"
        priority={true}
        width={100}
        height={100}
      />
      <div className="text-center mt-3">
        Back to home to select Items
      </div>
    </div>
  );
}

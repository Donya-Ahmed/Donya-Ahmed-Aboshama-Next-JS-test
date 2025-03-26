import React from "react";
import Image from "next/image";

export default function Success() {
  return (
    <div>
      <Image
        src={"/images/done.jpg"}
        alt={"empty"}
        className="w-[130px]  object-cover mx-auto mt-12 "
        priority={true}
        width={100}
        height={100}
      />
    </div>
  );
}

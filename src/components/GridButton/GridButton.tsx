import React from "react";
import styles from "./GridButton.module.css";
import Image from "next/image";
import GridButtonInterface from "@/Types/Interfaces/GridButtonInterface";
export default function GridButton({ src, alt,onClick }: GridButtonInterface) {
  return (
    <button className={styles.gridBtn} onClick={onClick}>
      <Image
        src={src}
        alt={alt}
        className="w-full  object-cover"
        priority={true}
        width={100}
        height={100}
      />
    </button>
  );
}

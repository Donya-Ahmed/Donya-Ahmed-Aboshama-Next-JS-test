import ProductInterface from "@/Types/Interfaces/ProductInterface";
import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";
import Link from "next/link";

const Card: React.FC<ProductInterface> = ({ id,title, price, image }) => {
  return (
  <Link href={`/products/${id}`}>
    <div className="bg-white rounded-xl p-5">
      <div className={styles.image}>
        <Image
          src={image}
          alt={title}
          className="w-full h-full"
          priority={true}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.description}>
        <h3 className={`${styles.title} text-primary`}>{title}</h3>
        <p className={` ${styles.price} text-primary`}>{price}</p>
      </div>
    </div>
  </Link>
  );
};

export default Card;

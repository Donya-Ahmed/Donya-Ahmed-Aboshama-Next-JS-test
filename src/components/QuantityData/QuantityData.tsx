import React from "react";
import styles from "./QuantityData.module.css";
import QuantityProps from "@/Types/Interfaces/QuantityProps";
import { IoAdd } from "react-icons/io5";
import { IoRemove } from "react-icons/io5";

export default function QuantityData({
  quantity,
  increase,
  decrease,
}: QuantityProps) {
  return (
    <div className={`${styles.quantityContainer} flex items-center justify-around`}>
      <button className={styles.btnQuantity} onClick={decrease} disabled={quantity===0}><IoRemove size={18}/></button>
      {quantity}
      <button className={styles.btnQuantity} onClick={increase} ><IoAdd size={18}/></button>
    </div>
  );
}

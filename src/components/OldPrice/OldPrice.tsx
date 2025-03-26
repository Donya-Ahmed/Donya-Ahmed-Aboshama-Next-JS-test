import React from "react";
import styles from "./OldPrice.module.css";
export default function OldPrice({ oldPrice }: { oldPrice: string }) {
  return <div className={styles.oldPrice}>{oldPrice}</div>;
}

import React from "react";
import styles from "./SaleBadge.module.css";
export default function SaleBadge({ sale }: { sale: number }) {
  return <div className={styles.save}>Save {sale}%</div>;
}

import React from "react";
import styles from "./StockState.module.css";
export default function StockState({ count }: { count: number }) {
  const bgColor = count >= 500 ? "bg-green-500" : "bg-[#EF2D2D]";

  return (
    <div>
      <p className={styles.countStock}>
        Only <span className={styles.countStockSpan}>{count}</span> item(s) left
        in stock!
      </p>
      <div className="w-full h-1 bg-[#DEDEDE] rounded-[2px] relative overflow-hidden mt-3">
        <div
          className={`h-full ${bgColor} rounded-[2px]`}
          style={{ width: `${Math.min(count / 10, 100)}%` }}
        ></div>
      </div>
    </div>
  );
}

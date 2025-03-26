import React, { useState } from "react";
import styles from "./CartDetails.module.css";
import DataTable from "@/components/DataTable/DataTable";
import ProductInterface from "@/Types/Interfaces/ProductInterface";
import Checkbox from "@/components/Checkbox/Checkbox";
import FilledButton from "@/components/Button/FilledButton";
export default function CartDetails({ data }: { data: ProductInterface[] }) {
  const [isChecked, setIsChecked] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const handleChangeChecBox = (checkedMark: boolean) => {
    setIsChecked(checkedMark);
    checkedMark
      ? setSubTotal((prev) => prev + 10)
      : setSubTotal((prev) => prev - 10);
  };
  return (
    <div>
      <DataTable data={data} setSubTotal={setSubTotal} />
      <div className=" grid grid-cols-1 grid-rows-[auto_1fr] place-items-end">
        <div className="w-[50%]">
          <div className="border-b border-[#00000063] py-8">
            <Checkbox
              label={
                <span className={styles.labelCheckbox}>
                  For <span className={styles.shippingPrice}>$10.00</span>{" "}
                  please wrap the product
                </span>
              }
              checked={isChecked}
              onChange={handleChangeChecBox}
            />
          </div>
          <div className="flex items-center justify-between mt-10 mb-8">
            <div>Subtotal</div>
            <div>{subTotal}</div>
          </div>
          <FilledButton
              titleBtn={"Checkout"}
              onClick={() => console.log("hello")}
            />
        </div>
      </div>
    </div>
  );
}

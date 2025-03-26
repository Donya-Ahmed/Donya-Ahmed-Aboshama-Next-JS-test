import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./CartDetails.module.css";
import DataTable from "@/components/DataTable/DataTable";
import ProductInterface from "@/Types/Interfaces/ProductInterface";
import Checkbox from "@/components/Checkbox/Checkbox";
import FilledButton from "@/components/Button/FilledButton";
export default function CartDetails({ data }: { data: ProductInterface[] }) {
  const [isChecked, setIsChecked] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
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
        <div className="w-[100%] xl:w-[50%] lg:w-[50%]  md:w-[100%] sm:w-[100%] ">
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
            <div>{subTotal.toFixed(2)}</div>
          </div>
          <FilledButton
              titleBtn={"Checkout"}
              onClick={() => router.push(`/checkout`)}
            />
        </div>
      </div>
    </div>
  );
}

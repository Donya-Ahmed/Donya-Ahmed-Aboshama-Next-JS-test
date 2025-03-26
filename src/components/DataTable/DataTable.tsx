import React, { useEffect, useState } from "react";
import Image from "next/image";
import QuantityData from "../QuantityData/QuantityData";
import ProductInterface from "@/Types/Interfaces/ProductInterface";
import styles from "./DataTable.module.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateProducts,
  updateQuantity
} from "@/Redux/Slices/cartSlice";
import TotalPrice from "@/Helpers/TotalPrice";
import TotalQuantity from "@/Helpers/TotalQuantity";

export default function DataTable({ data,setSubTotal }: { data: ProductInterface[] ,setSubTotal:any}) {
  const dispatch = useDispatch();

  const [products, setProducts] = useState(data);

  const increaseCount = (index: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((item, i) =>
        i === index ? { ...item, quantity: (item.quantity) + 1 } : item
      )
    );
    updateProducts([products])
  };

  const decreaseCount = (index: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((item, i) =>
        i === index && (item.quantity!) > 0
          ? { ...item, quantity: item.quantity! - 1 }
          : item
      )
    );
    updateProducts([products])
  };
  const handleRemoveFromCart = (product: ProductInterface) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
    dispatch(removeFromCart({ id: product.id }));
  };
  useEffect(() => {
    setSubTotal(TotalPrice(products))
    dispatch(updateQuantity(TotalQuantity(products)));
  }, [products]);
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className={`text-left text-primary ${styles.tableHead}`}>
            <th className="py-5 px-4 font-medium border-b border-[#00000063]">
              Product
            </th>
            <th className="py-5 px-4 font-medium border-b border-[#00000063]">
              Price
            </th>
            <th className="py-5 px-4 font-medium border-b border-[#00000063]">
              Quantity
            </th>
            <th className="py-5 px-4 font-medium border-b border-[#00000063]">
              Total
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50 transition">
              <td className="py-5 px-4 border-b border-[#00000063]">
                <div className="flex items-center gap-5">
                  <div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                      priority={true}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-[50%]">
                    <p
                      className={`text-xs sm:text-xs   lg:text-xl ${styles.productTitle}`}
                    >
                      {item.title}
                    </p>
                    <button
                      className={styles.btnRemove}
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </td>
              <td className="py-5 px-4 border-b border-[#00000063]">
                ${item.price}
              </td>
              <td className="py-5 px-4 border-b border-[#00000063]">
                <QuantityData
                  quantity={item.quantity}
                  increase={() => increaseCount(index)}
                  decrease={() => decreaseCount(index)}
                />
              </td>
              <td className="py-5 px-4 border-b border-[#00000063]">
                ${(item.price * (item.quantity)).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

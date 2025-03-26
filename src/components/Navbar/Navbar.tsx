"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  IoSearchOutline,
  IoStarOutline,
  IoPersonOutline,
  IoBagOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
  const counter: number = useSelector(
    (state: RootState) => state.cart.counter
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} bg-white w-full`}>
      <div className="container flex justify-between items-center py-4">
        <h1
          className={`${styles.logo} font-normal text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-secondary`}
        >
          FASCO
        </h1>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className={` link text-secondary ${styles.linkNavbar}`}
          >
            Home
          </Link>
          <Link
            href="/cart"
            className={` link text-secondary ${styles.linkNavbar}`}
          >
            Shop
          </Link>
          <Link
            href="/products"
            className={` link text-secondary ${styles.linkNavbar}`}
          >
            Products
          </Link>
          <Link
            href="/pages"
            className={` link text-secondary ${styles.linkNavbar}`}
          >
            Pages
          </Link>
        </div>
        <div className="flex space-x-4">
          <IoSearchOutline
            className="text-secondary cursor-pointer"
            size={24}
          />
          <IoPersonOutline
            className="text-secondary cursor-pointer"
            size={24}
          />
          <IoStarOutline className="text-secondary cursor-pointer" size={24} />
          <span className={styles.cartBag}>
          <IoBagOutline className={` text-secondary cursor-pointer`} size={24} />
          <div className={styles.badge}>{counter}</div>
          </span>
        </div>
        <button
          className="md:hidden text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoCloseOutline size={30} /> : <IoMenuOutline size={30} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[64px] left-0 w-full">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/" className="link text-secondary">
              Home
            </Link>
            <Link href="/cart" className="link text-secondary">
              Shop
            </Link>
            <Link href="/products" className=" link text-secondary">
              Products
            </Link>
            <Link href="/pages" className="link text-secondary">
              Pages
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

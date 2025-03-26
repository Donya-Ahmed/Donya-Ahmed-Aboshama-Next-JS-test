import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} py-10 mt-24`}>
      <div className="container  flex justify-between mx-auto  xl:max-w-[1280px]">
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
      </div>
      <div className="container text-secondary flex justify-center mx-auto  xl:max-w-[1280px] mt-8"> © {new Date().getFullYear()} My App. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import Card from "@/components/Card/Card";
import GridButton from "@/components/GridButton/GridButton";
import ProductInterface from "@/Types/Interfaces/ProductInterface";
import styles from "./ProductsView.module.css";
import Pagination from "@/components/Pagination/Pagination";

interface PropsProduct {
  data: ProductInterface[];
}

const ITEMS_PER_PAGE = 8; // Number of items per page

const ProductsView = ({ data }: PropsProduct) => {
  const [page, setPage] = useState(1);
  const [itemsPerRow, setItemsPerRow] = useState(4);

  const NUMBER_OF_PAGES = Math.ceil(data.length / ITEMS_PER_PAGE);
  const arrayOfPages = Array.from({ length: NUMBER_OF_PAGES }, (_, i) => i + 1);

  // Pagination Logic
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const gridCols =
    {
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    }[itemsPerRow] || "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <div className="container py-20">
      <div className="flex justify-between items-center">
        <p className={styles.bestSeller}>Best Selling</p>
        <div className="flex justify-between items-center gap-1">
          <GridButton
            src="/images/SVG.png"
            alt="grid3"
            onClick={() => setItemsPerRow(3)}
          />
          <GridButton
            src="/images/SVG-1.png"
            alt="grid4"
            onClick={() => setItemsPerRow(4)}
          />
          <GridButton
            src="/images/SVG-2.png"
            alt="grid5"
            onClick={() => setItemsPerRow(5)}
          />
        </div>
      </div>
      <div className={`grid ${gridCols} gap-6 mt-6`}>
        {paginatedData.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
            id={product.id}
            description={""}
            category={""}
            quantity={0}
            rating={{
              rate: 0,
              count: 0,
            }}
          />
        ))}
      </div>
      <Pagination arrayOfPages={arrayOfPages} page={page} setPage={setPage} NUMBER_OF_PAGES={NUMBER_OF_PAGES}/>
    </div>
  );
};

export default ProductsView;

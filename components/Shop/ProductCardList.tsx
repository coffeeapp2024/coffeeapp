import React from "react";
import ProductCard from "./ProductCard";
import { useProductStore, useProductTagStore } from "@/store/zustand";

function ProductCardList() {
  const { products } = useProductStore();
  const { currentTag } = useProductTagStore();

  if (!products) return;

  // Filter products by currentTag if it exists and is not empty
  const filteredProducts =
    currentTag && currentTag !== "all"
      ? products.filter(
          (product) => product.tags && product.tags.includes(currentTag)
        )
      : products;

  return (
    <div className="grid grid-cols-2 gap-2">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductCardList;

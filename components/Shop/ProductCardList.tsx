"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useProductStore, useProductTagStore } from "@/store/zustand";
import ProductDialog from "./ProductDialog";

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
    <div className="grid grid-cols-2 gap-x-2 gap-y-3 ">
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
      <ProductDialog />
    </div>
  );
}

export default ProductCardList;

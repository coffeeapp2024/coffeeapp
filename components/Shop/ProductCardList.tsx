import React from "react";
import ProductCard from "./ProductCard";
import { useProductStore, useProductTagStore } from "@/store/zustand";

export const toppings = [
  { id: "a", name: "Milk", price: 5, point: 2 },
  { id: "ab", name: "Sugar", price: 3, point: 1 },
  { id: "abc", name: "Honey", price: 4, point: 2 },
];

export const item = {
  name: "Drink Tea Tea",
  size: "Large",
  sizes: [
    { size: "S", point: 2, price: 8 },
    { size: "M", point: 3, price: 10 },
    { size: "L", point: 4, price: 12 },
  ],
  toppingIds: ["a", "ab", "abc"],
  price: 42, // Giá cơ bản của mặt hàng
  point: 3, // Điểm cơ bản của mặt hàng
  toppings: [
    "toppingId1", // ID của topping 1
    "toppingId2", // ID của topping 2
    // Các topping khác...
  ],
};

function ProductCardList() {
  // const { products } = useProductStore();
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
    </div>
  );
}

export default ProductCardList;

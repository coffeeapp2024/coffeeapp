"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { useProductStore, useProductTagStore } from "@/store/zustand";

const demoProductList = [
  {
    id: "7bgVfNe5KM47wXL774B4",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F11.jpg?alt=media&token=965d5c2b-3c8c-4a52-9850-1ca76460a1e3",
    name: "ice cream chocolate",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: 30,
    tags: ["food", "popular"],
  },
  {
    id: "ENwbJROMWFl7l2VQcacK",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink2.jpg?alt=media&token=6e53c4dc-d27b-4186-9425-e8e78f63744b",
    name: "Kopaja",
    point: 3,
    tags: ["drink"],
  },
  {
    id: "M00pQwY9jsWIQr1h7QLo",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
    name: "Kopaja kitajo",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: 10,
    tags: ["drink"],
  },
  {
    id: "eHR9zkwIGjFxMJhXbQbG",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F33.jpg?alt=media&token=642c9de2-994f-4f51-84f9-7c6ebf5208a1",
    name: "drink tea tea",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: 42,
    tags: ["tea", "popular"],
  },
  {
    id: "fgU07XuMHhw9NcHruloO",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F44.jpg?alt=media&token=d7dab7df-6a29-4bf6-aa20-77c3f7e1f368",
    name: "lorem ipsum tea",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: "29",
    tags: ["popular", "tea"],
  },
  {
    id: "ipLh1oB5ssXXRLxuxsbx",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F23.jpg?alt=media&token=90ec1d34-ec62-4618-9652-d1585627e404",
    name: "laohg hadilao",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: 40,
    tags: ["popular", "food"],
  },
  {
    id: "jObIWIUoHsEGInmue6ZF",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
    name: "Kopi suren",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: 10,
  },
  {
    id: "lNAikJVfE4Rs0DFOdABe",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink1.jpg?alt=media&token=035f83d2-5f66-49a5-b0f2-f78611da33b1",
    name: "Kopsu mantan",
    point: 3,
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    price: 12,
    tags: ["drink"],
  },
];

const toppings = [
  { id: "a", name: "Milk", price: 5, point: 2 },
  { id: "ab", name: "Sugar", price: 3, point: 1 },
  { id: "abc", name: "Honey", price: 4, point: 2 },
];

const item = {
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

function RecommendProductCards() {
  // const { products } = useProductStore();
  const products = demoProductList;

  const { productTags } = useProductTagStore();
  if (!products) return null;

  const filteredProducts = products.filter(
    (product) => product.tags && product.tags.includes("popular")
  );

  const popularTag = productTags?.find((productTag) =>
    productTag.tag.includes("popular")
  );

  const popularTagName = popularTag ? popularTag.name : "Most Popularr";

  return (
    <div className="">
      <h2 className="font-bold text-neutral-800 text-xl mb-2 ml-3">
        {popularTagName}
      </h2>
      <div>
        <Carousel
          opts={{
            startIndex: 1,
            dragFree: true,
          }}
        >
          <CarouselContent className="ml-0 pb-2">
            {filteredProducts.map((product, index) => (
              <CarouselItem key={index} className="basis-[46%] pl-2">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default RecommendProductCards;

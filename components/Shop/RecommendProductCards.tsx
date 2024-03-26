"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { useProductStore, useProductTagStore } from "@/store/zustand";
import { demoProductList } from "./ProductCardList";

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

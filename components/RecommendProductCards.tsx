import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

function RecommendProductCards() {
  const productInfoList = [
    {
      name: "Kopsu mantan",
      imgUrl: "/product/drink1.jpg",
      price: 12,
    },
    {
      name: "Kopaja",
      imgUrl: "/product/drink2.jpg",
      price: 21,
    },
    {
      name: "Kopi suren",
      imgUrl: "/product/drink3.jpg",
      price: 9,
    },
  ];
  return (
    <div className="">
      <h2 className="font-bold text-neutral-800 text-xl mb-2 ml-3">
        Most Popular
      </h2>
      <div>
        <Carousel>
          <CarouselContent className="ml-0 py-2">
            {productInfoList.map((productInfo, index) => (
              <CarouselItem key={index} className="basis-[46%] pl-2">
                <ProductCard productInfo={productInfo} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default RecommendProductCards;

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import GameCard from "./GameCard";

const gameInfoList = [
  { imgUrl: "/icons/cases/case1.png", price: 8 },
  { imgUrl: "/icons/cases/case2.png", price: 8 },
  { imgUrl: "/icons/cases/case3.png", price: 8 },
  { imgUrl: "/icons/cases/case4.png", price: 8 },
];

export default function GameCardList() {
  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-12">
        {gameInfoList.map((gameInfo, index) => (
          <CarouselItem key={index} className="basis-[60%] pl-6">
            <GameCard gameInfo={gameInfo} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

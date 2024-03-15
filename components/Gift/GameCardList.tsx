import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import GameCard from "./GameCard";

const gameInfoList = [
  { imgUrl: "/icons/levels/lv1.png" },
  { imgUrl: "/icons/levels/lv2.png" },
];

export default function GameCardList() {
  return (
    <Carousel
      opts={{
        // startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-8">
        {gameInfoList.map((gameInfo, index) => (
          <CarouselItem key={index} className="basis-[60%] pl-6">
            <GameCard gameInfo={gameInfo} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import GameCard from "./GameCard";
import { useCaseStore } from "@/store/zustand";

export default function GameCardList() {
  const { cases } = useCaseStore();

  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-12">
        {cases.map((gameCase, index) => (
          <CarouselItem key={index} className="basis-[60%] pl-6">
            <GameCard gameCase={gameCase} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

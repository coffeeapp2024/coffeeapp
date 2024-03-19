import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BoostCard from "./BoostCard";
import { useLevelStore } from "@/store/zustand";

function BoostCardList() {
  const { levels } = useLevelStore(); // Assuming useLevelStore hook is provided by Zustand

  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-8">
        {levels.map((level, index) => (
          <CarouselItem key={index} className="basis-[60%] pl-6">
            <BoostCard currentNextBalance={level.balance} level={level} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default BoostCardList;

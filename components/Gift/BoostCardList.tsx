import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BoostCard from "./BoostCard";
import { useLevelStore, useUserDataStore } from "@/store/zustand";
import { Level } from "@/store/storeTypes";

function getNextBalance(currentBalance: number, levels: Level[]) {
  const nextLevel = levels.find((lvl) => lvl.balance > currentBalance);
  return nextLevel ? nextLevel.balance : null;
}

function BoostCardList() {
  const { levels } = useLevelStore();
  const { userData } = useUserDataStore();

  const { balance } = userData ?? {};

  const nextBalance =
    balance && levels ? getNextBalance(balance, levels) : null;

  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-8">
        {levels?.map((level, index) => (
          <CarouselItem key={index} className="basis-[50%] pl-6">
            <BoostCard nextBalance={nextBalance} level={level} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default BoostCardList;

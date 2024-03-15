import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BoostCard from "./BoostCard";

const boostInfoList = [
  {
    imgUrl: "/icons/levels/lv1.png",
    balance: 0.1,
    info: "0.1 coin per hour",
    price: 8,
  },
  {
    imgUrl: "/icons/levels/lv2.png",
    balance: 0.3,
    info: "0.3 coin per hour",
    price: 15,
  },
  {
    imgUrl: "/icons/levels/lv3.png",
    balance: 0.5,
    info: "0.5 coin per hour",
    price: 20,
  },
  {
    imgUrl: "/icons/levels/lv4.png",
    balance: 0.9,
    info: "0.9 coin per hour",
    price: 25,
  },
  {
    imgUrl: "/icons/levels/lv5.png",
    balance: 1.2,
    info: "1.2 coin per hour",
    price: 30,
  },
];

const currentNextBalance = 0.3;

function BoostCardList() {
  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-8">
        {boostInfoList.map((boostInfo, index) => (
          <CarouselItem key={index} className="basis-[60%] pl-6">
            <BoostCard
              currentNextBalance={currentNextBalance}
              boostInfo={boostInfo}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default BoostCardList;

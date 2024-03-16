import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import VoucherCard from "./VoucherCard";

const voucherInfoList = [
  {
    imgUrl: "/vouchers/vc1.png",
    info: "sale off 20%",
    price: 8,
  },
  {
    imgUrl: "/vouchers/vc2.png",
    info: "sale off 20%",
    price: 8,
  },
  {
    imgUrl: "/vouchers/vc3.png",
    info: "sale off 20%",
    price: 8,
  },
  {
    imgUrl: "/vouchers/vc4.png",
    info: "sale off 20%",
    price: 8,
  },
  {
    imgUrl: "/vouchers/vc5.png",
    info: "sale off 20%",
    price: 8,
  },
];

function VoucherCardList() {
  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-8">
        {voucherInfoList.map((voucherInfo, index) => (
          <CarouselItem key={index} className="basis-[75%] pl-4">
            <VoucherCard voucherInfo={voucherInfo} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default VoucherCardList;

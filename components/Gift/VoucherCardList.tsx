import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import VoucherCard from "./VoucherCard";
import { useVoucherStore } from "@/store/zustand";

function VoucherCardList() {
  const { vouchers } = useVoucherStore();

  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-8">
        {vouchers?.map((voucher, index) => (
          <CarouselItem key={index} className="basis-[75%] pl-4">
            <VoucherCard voucher={voucher} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default VoucherCardList;

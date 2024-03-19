import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import UserVoucher from "./UserVoucher";
import { useUserDataStore } from "@/store/zustand";

function VoucherCardList() {
  const { userData } = useUserDataStore();
  const { voucherIdList } = userData ?? {};

  return (
    <Carousel
      opts={{
        startIndex: 1,
        dragFree: true,
      }}
      className="-mx-0"
    >
      <CarouselContent className="-ml-0 pb-20">
        {voucherIdList?.map((voucherId, index) => (
          <CarouselItem key={index} className="basis-[80%] pl-3">
            <UserVoucher voucherId={voucherId} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default VoucherCardList;

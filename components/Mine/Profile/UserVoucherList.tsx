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
    <div className="">
      <div className="flex items-center justify-center mb-14">
        <span className="text-neutral-900 text-sm font-medium">
          Vouchers: {voucherIdList?.length}
        </span>
      </div>
      <Carousel
        opts={{
          startIndex: 1,
          dragFree: true,
        }}
        className="-mx-0x"
      >
        <CarouselContent className="-ml-0 pb-20">
          {voucherIdList?.map((voucherId, index) => (
            <CarouselItem key={index} className="basis-[80%] pl-3">
              <UserVoucher voucherId={voucherId} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default VoucherCardList;

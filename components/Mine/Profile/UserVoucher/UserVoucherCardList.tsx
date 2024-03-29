import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import UserVoucher from "./UserVoucherCard";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherCard from "./UserVoucherCard";
import QrCodeUserVoucher from "./QrCodeUserVoucher";

function UserVoucherCardList() {
  const { userData } = useUserDataStore();

  const { voucherIdList } = userData ?? {};

  return (
    <div className="overflow-y-scroll">
      {/* <div className="flex items-center justify-center mb-14">
        <span className="text-neutral-900 text-sm font-medium">
          Vouchers: {voucherIdList?.length}
        </span>
      </div> */}
      <Carousel
        opts={{
          startIndex: 1,
          dragFree: true,
        }}
        className="-mx-0x"
      >
        <div className="-ml-0 pb-20 flex flex-col gap-y-3">
          {voucherIdList?.map((voucherId, index) => (
            <UserVoucherCard key={index} index={index} voucherId={voucherId} />
          ))}
        </div>
      </Carousel>
      <QrCodeUserVoucher />
    </div>
  );
}

export default UserVoucherCardList;

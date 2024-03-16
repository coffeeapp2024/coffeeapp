import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import UserVoucher from "./UserVoucher";

const userVoucherInfoList = [
  {
    imgUrl: "/vouchers/vc1.png",
    info: "sale off 20%",
    qrCode: "/vouchers/vc1.png",
  },
  {
    imgUrl: "/vouchers/vc2.png",
    info: "sale off 20%",
    qrCode: "/vouchers/vc1.png",
  },
  {
    imgUrl: "/vouchers/vc3.png",
    info: "sale off 20%",
    qrCode: "/vouchers/vc1.png",
  },
  {
    imgUrl: "/vouchers/vc4.png",
    info: "sale off 20%",
    qrCode: "/vouchers/vc1.png",
  },
  {
    imgUrl: "/vouchers/vc5.png",
    info: "sale off 20%",
    qrCode: "/vouchers/vc1.png",
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
      <CarouselContent className="-ml-0 pb-20">
        {userVoucherInfoList.map((userVoucherInfo, index) => (
          <CarouselItem key={index} className="basis-[80%] pl-3">
            <UserVoucher userVoucherInfo={userVoucherInfo} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default VoucherCardList;

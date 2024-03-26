"use client";

import React from "react";
import CoinIcon from "../Template/CoinIcon";
import Image from "next/image";

function VoucherCard({ voucherDataList }: { voucherDataList: any }) {
  const { imageURL } = voucherDataList;

  return (
    <div className="relative bg-card w-full py-2 pl-2 pr-4 rounded-2xl flex shadow-sm">
      {/* Left */}
      <div className="bg-background basis-1/3 aspect-square rounded-xl overflow-hidden">
        <Image
          src={imageURL}
          width={300}
          height={300}
          alt="Image Voucher"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="pl-3 pt-1">
        <div className="mb-2">
          <h3 className="font-bold text-lg">Giảm 30%</h3>
          <p className="text-wrap text-sm">Tối đa 15k cho đơn từ 0đ</p>
        </div>
        <span className="flex items-center justify-center w-fit font-semibold">
          20
          <CoinIcon classname="w-4 h-4" />
        </span>
      </div>

      <button className="absolute bottom-2 right-2 text-nowrap font-semibold px-2 py-1 rounded-primary-button border-2px border-primary-foreground  text-primary-foreground">
        Thu Thập
      </button>
    </div>
  );
}

export default VoucherCard;

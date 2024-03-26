import React from "react";
import CoinIcon from "../Template/CoinIcon";

function BuyVoucherCard() {
  return (
    <div className="relative bg-card w-full aspect-voucher-card py-2 pl-2 pr-4 rounded-2xl flex">
      {/* Left */}
      <div className="bg-background aspect-square basis-5 rounded-xl "></div>

      {/* Right */}
      <div className="pl-3 pt-2">
        <div className="mb-2">
          <h3 className="font-bold text-lg">Giảm 30%</h3>
          <p className="text-wrap">Tối đa 15k cho đơn từ 0đ</p>
        </div>
        <span className="flex items-center justify-center w-fit font-semibold">
          20
          <CoinIcon classname="w-5 h-5" />
        </span>
      </div>

      <button className="absolute bottom-2 right-2 text-nowrap font-semibold px-2 py-1 rounded-primary-button border-2px border-primary-foreground  text-primary-foreground">
        Thu Thập
      </button>
    </div>
  );
}

export default BuyVoucherCard;

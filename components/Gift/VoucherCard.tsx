import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import CoinIcon from "../CoinIcon";
import { Voucher } from "@/store/storeTypes";

function VoucherCard({ voucher }: { voucher: Voucher }) {
  const { imageURL, info, price } = voucher;

  return (
    <div className="bg-neutral-50 aspect-[8/7]   rounded-3xl pt-3 px-3 relative ">
      <div className="relative h-1/2 mb-4">
        <Image
          src={imageURL}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="level icon"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-y-4">
        <span className="font-semibold text-neutral-700 text-xl">{info}</span>
        <div className="flex items-center justify-center pl-2">
          <span className="font-bold text-2xl">{price}</span>
          <CoinIcon classname="w-6 h-6" />
        </div>
      </div>
      <button
        className={`absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2`}
      >
        <MainButton text="Buy" />
      </button>
    </div>
  );
}

export default VoucherCard;

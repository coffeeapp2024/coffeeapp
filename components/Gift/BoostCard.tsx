import type { BoostInfo } from "@/lib/types";
import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import CoinIcon from "../CoinIcon";

function BoostCard({
  boostInfo,
  currentNextBalance,
}: {
  boostInfo: BoostInfo;
  currentNextBalance: number;
}) {
  const { imgUrl, info, balance, price } = boostInfo;

  const isHidden = currentNextBalance === balance ? false : true;

  return (
    <div className="bg-neutral-50 aspect-square rounded-3xl pt-2 relative ">
      <div className="relative h-1/2 mb-3">
        <Image
          src={imgUrl}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="level icon"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-y-2">
        <span className="font-semibold text-neutral-700">{info}</span>
        <div className="flex items-center justify-center pl-2">
          <span className="font-bold text-xl">{price}</span>
          <CoinIcon classname="w-6 h-6  " />
        </div>
      </div>
      <button
        className={`absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 ${
          isHidden && "grayscale pointer-events-none"
        }`}
      >
        <MainButton text="Upgrade" />
      </button>
    </div>
  );
}

export default BoostCard;

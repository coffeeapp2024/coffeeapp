"use client";

import React from "react";
import CoinIcon from "./CoinIcon";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

type PageProps = {
  imageURL: string;
  name: string;
  info: string;
  nameButton: string;
  price?: number;
  onClick: any;
};

function VoucherCardTemplate({
  imageURL,
  name,
  info,
  price,
  nameButton,
  onClick,
}: PageProps) {
  return (
    <div className="relative h-32 bg-card w-full py-2 pl-2 pr-4 rounded-2xl flex shadow-sm">
      {/* Left */}
      <div className="bg-background h-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={imageURL}
          width={300}
          height={300}
          alt="Image Voucher"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="pl-3 pt-1 basis-2/3">
        <div className="mb-2">
          <h3 className="font-bold">{name}</h3>
          <p className="text-wrap text-sm">{info}</p>
        </div>

        {price && (
          <span className="flex items-center justify-center w-fit font-semibold">
            {price}
            <CoinIcon classname="w-4 h-4" />
          </span>
        )}
      </div>
      <SecondaryButton name={nameButton} onClick={() => onClick()} />
    </div>
  );
}

export default VoucherCardTemplate;

"use client";

import React from "react";
import CoinIcon from "./CoinIcon";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

type PageProps = {
  imageURL: string;
  name: string;
  details: string[];
  nameButton: string;
  price?: number;
  onClick: any;
};

function VoucherCardTemplate({
  imageURL,
  name,
  details,
  price,
  nameButton,
  onClick,
}: PageProps) {
  return (
    <div className="relative h-32 bg-white bg-opacity-70 w-full py-2 pl-2 pr-4 rounded-2xl flex shadow-sm">
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

          {details.map((item, index) => (
            <p key={index} className="text-wrap text-sm">
              {item}
            </p>
          ))}
        </div>

        {price && (
          <span className="flex items-center justify-center w-fit font-semibold">
            <CoinIcon className="w-4 h-4 -ml-[1px]" />
            {price}
          </span>
        )}
      </div>
      <SecondaryButton name={nameButton} onClick={() => onClick()} />
    </div>
  );
}

export default VoucherCardTemplate;

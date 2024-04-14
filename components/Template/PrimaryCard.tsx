"use client";

import React from "react";
import Image from "next/image";
import SecondaryButton from "./SecondaryButton";

type VoucherCardProps = {
  imageURL: string | null | undefined;
  title: string;
  details: string[];
  buttonText: string;
  onButtonClick: () => void;
  children?: React.ReactNode;
};

const PrimaryCard: React.FC<VoucherCardProps> = ({
  imageURL,
  title,
  details,
  buttonText,
  onButtonClick,
  children, // Renamed to onMenuClick
}: VoucherCardProps) => {
  return (
    <div className="relative h-32 bg-white bg-opacity-70 w-full py-2 pl-2 pr-4 rounded-2xl flex shadow-sm">
      {/* Left */}
      <div className="bg-background h-full aspect-square rounded-xl overflow-hidden">
        {imageURL && (
          <Image
            src={imageURL}
            width={300}
            height={300}
            alt="Image Voucher"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Right */}
      <div className="pl-3 basis-2/3">
        <div className="mb-2">
          <h3 className="font-bold">{title}</h3>

          {details.map((item, index) => (
            <p key={index} className="text-neutral-700 text-sm font-semibold">
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Button and More Popover */}
      <div className="flex flex-col justify-between items-end">
        <SecondaryButton name={buttonText} onClick={onButtonClick} />
      </div>

      {children}
    </div>
  );
};

export default PrimaryCard;

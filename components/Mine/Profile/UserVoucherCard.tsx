"use client";

import Image from "next/image";
import React from "react";
import { useOpenQrVoucherStore, useVoucherStore } from "@/store/zustand";
import { toast } from "sonner";
import CoinIcon from "@/components/Template/CoinIcon";
import MainButton from "@/components/MainButton";

function UserVoucherCard({
  voucherId,
  index,
}: {
  voucherId: string;
  index: number;
}) {
  const { setIndex, setVoucherId, setOpen } = useOpenQrVoucherStore();
  const { vouchers } = useVoucherStore();
  const voucher = vouchers?.find((voucher) => voucher.id === voucherId);
  if (!voucher) return;

  const { imageURL, info, price, name, id } = voucher;

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
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-wrap text-sm">{info}</p>
        </div>
        <span className="flex items-center justify-center w-fit font-semibold">
          {price}
          <CoinIcon classname="w-4 h-4" />
        </span>
      </div>

      <button
        className={`absolute bottom-2 right-2 text-nowrap font-semibold px-2 py-1 rounded-primary-button border-2px border-primary-foreground  text-primary-foreground`}
        onClick={() => {
          toast.info(
            "Scan this voucher at the coffee shop to claim your offer."
          );

          setOpen(true);
          setIndex(index);
          setVoucherId(voucherId);
        }}
      >
        Claim
      </button>
    </div>
  );
}

export default UserVoucherCard;

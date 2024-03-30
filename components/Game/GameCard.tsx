"use client";

import React from "react";
import MainButton from "../MainButton";
import Image from "next/image";
import CoinIcon from "../Template/CoinIcon";
import { Case } from "@/store/storeTypes";
import { useRandomVoucherStore, useUserDataStore } from "@/store/zustand";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";

function GameCard({ gameCase }: { gameCase: Case }) {
  const { userData, setUserData } = useUserDataStore();
  const { icon, price, voucherIdList: caseVoucherIdList } = gameCase;
  const { setOpen, setRandomVoucherId } = useRandomVoucherStore();

  const isHidden =
    !caseVoucherIdList || caseVoucherIdList.length <= 0 || !userData;

  const handlePlay = async () => {
    if (!userData || !caseVoucherIdList || !caseVoucherIdList.length) return;

    const randomIndex = Math.floor(Math.random() * caseVoucherIdList.length);
    const randomVoucherId = caseVoucherIdList[randomIndex];

    const updatedVouchers = [
      ...(userData.voucherIdList || []),
      randomVoucherId,
    ];

    const updatedUserData = await toast.promise(
      updateUserDataAfterPurchase(userData, setUserData, price, [
        {
          key: "voucherIdList",
          value: updatedVouchers,
        },
      ]),
      {
        loading: "Proccessing...",
        success: "Well done! You've earned a random voucher!",
        error: (error) => error.message,
      }
    );
    if (updatedUserData) {
      setRandomVoucherId(randomVoucherId);
      setOpen(true);
    }
  };

  return (
    <div className="aspect-square rounded-3xl pt-2 relative bg-transparent">
      <div className="relative h-2/3 mb-4">
        <Image
          src={icon}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="game icon"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center pl-2">
        <CoinIcon classname="w-6 h-6" />
        <span className="font-bold text-xl">{price}</span>
      </div>
      <button
        onClick={handlePlay}
        className={`${
          isHidden && "pointer-events-none grayscale"
        } absolute -bottom-4 translate-y-1/2 left-1/2 -translate-x-1/2`}
      >
        <MainButton text="Open" />
      </button>
    </div>
  );
}

export default GameCard;
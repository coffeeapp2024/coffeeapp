"use client";

import React, { useState } from "react";
import MainButton from "../Template/MainButton";
import Image from "next/image";
import CoinIcon from "../Template/CoinIcon";
import { Case } from "@/store/storeTypes";
import { useRandomVoucherStore, useUserDataStore } from "@/store/zustand";
import { calculateInitialCurrentCoin } from "@/lib/coinActions";
import { toast } from "sonner";
import { updateUserInFirestore } from "@/lib/firebaseFunctions";

function GameCard({ gameCase }: { gameCase: Case }) {
  const { userData, setUserData, userId } = useUserDataStore();
  const { icon, price, voucherIdList: caseVoucherIdList, id } = gameCase;
  const { setOpen, setRandomVoucherId } = useRandomVoucherStore();

  const isHidden =
    !caseVoucherIdList || caseVoucherIdList.length <= 0 || !userData;

  const handlePlay = async () => {
    if (
      !userData ||
      !userId ||
      !id ||
      !caseVoucherIdList ||
      !caseVoucherIdList.length
    )
      return;
    const { coin, voucherIdList, balance, startTimeMine } = userData;
    if (!coin || !balance || !startTimeMine) return;
    const currentCoin = calculateInitialCurrentCoin(
      balance,
      coin,
      startTimeMine
    );
    if (currentCoin < price) {
      console.warn("Insufficient balance or voucher already owned.");
      return;
    }
    try {
      const updatedCoin = currentCoin - price;

      const randomIndex = Math.floor(Math.random() * caseVoucherIdList.length);
      const randomVoucherId = caseVoucherIdList[randomIndex];
      setRandomVoucherId(randomVoucherId);
      setOpen(true);
      toast.success("Well done! You've earned  a random voucher!");

      // Update user data
      const newUserData = {
        ...userData,
        coin: updatedCoin,
        startTimeMine: new Date().toISOString(),
        voucherIdList: [...(voucherIdList || []), randomVoucherId],
      };

      setUserData(newUserData);
      await updateUserInFirestore(userId, newUserData);
    } catch (error) {
      console.error("Error updating user data:", error);
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
        <span className="text-white font-bold text-xl">{price}</span>
        <CoinIcon classname="w-6 h-6" />
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

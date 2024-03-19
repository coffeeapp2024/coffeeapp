"use client";

import React from "react";
import MainButton from "../MainButton";
import Image from "next/image";
import CoinIcon from "../CoinIcon";
import { Case } from "@/store/storeTypes";
import { useUserDataStore } from "@/store/zustand";
import { updateUserInFirestore } from "@/lib/firebaseFunctions";
import { calculateInitialCurrentCoin } from "@/lib/coinActions";

function GameCard({ gameCase }: { gameCase: Case }) {
  const { userData, setUserData, userId } = useUserDataStore();
  const { icon, price, voucherIdList: caseVoucherIdList, id } = gameCase;

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
    if (coin !== null && coin >= price) {
      try {
        // Deduct the price of the case from the user's coin balance
        const currentCoin = calculateInitialCurrentCoin(
          balance,
          coin,
          startTimeMine
        );
        const updatedCoin = currentCoin - price;

        // Get a random voucher ID from the list of vouchers associated with the case
        const randomIndex = Math.floor(
          Math.random() * caseVoucherIdList.length
        );
        const randomVoucherId = caseVoucherIdList[randomIndex];
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
    } else {
      console.warn("Insufficient balance or voucher already owned.");
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
        <MainButton text="Play" />
      </button>
    </div>
  );
}

export default GameCard;

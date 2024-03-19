import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import CoinIcon from "../CoinIcon";
import { Level } from "@/store/storeTypes";
import { useUserDataStore } from "@/store/zustand";
import { calculateInitialCurrentCoin } from "@/lib/coinActions";
import { updateUserInFirestore } from "@/lib/firebaseFunctions";
import { toast } from "sonner";

function BoostCard({
  level,
  nextBalance,
}: {
  level: Level;
  nextBalance: number | null;
}) {
  const { userData, userId, setUserData } = useUserDataStore();
  const { coin, startTimeMine, balance: userBalance } = userData ?? {};

  const { icon, balance: levelBalance, price } = level;
  const isHidden = nextBalance === levelBalance ? false : true;

  const handleUpgrade = async () => {
    if (
      userId &&
      userData &&
      startTimeMine &&
      userBalance &&
      coin &&
      coin >= price &&
      levelBalance > userBalance
    ) {
      const currentCoin = calculateInitialCurrentCoin(
        userBalance,
        coin,
        startTimeMine
      );

      const updatedCoin = currentCoin - price;

      const newUserData = {
        ...userData,
        coin: updatedCoin,
        startTimeMine: new Date().toISOString(),
        balance: levelBalance,
      };

      setUserData(newUserData);
      await updateUserInFirestore(userId, newUserData);
      toast.success("Upgrade successfully");
    }
  };

  return (
    <div className="bg-neutral-50 aspect-square rounded-3xl pt-2 relative ">
      <div className="relative h-1/2 mb-3">
        <Image
          src={icon}
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="level icon"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-y-2">
        <span className="font-semibold text-neutral-700">
          {levelBalance} coin per hour
        </span>
        <div className="flex items-center justify-center pl-2">
          <span className="font-bold text-xl">{price}</span>
          <CoinIcon classname="w-6 h-6  " />
        </div>
      </div>
      <button
        onClick={handleUpgrade}
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

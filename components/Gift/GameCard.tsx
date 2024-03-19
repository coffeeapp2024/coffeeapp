import React from "react";
import MainButton from "../MainButton";
import Image from "next/image";
import CoinIcon from "../CoinIcon";
import { Case } from "@/store/storeTypes";
import { useUserDataStore } from "@/store/zustand";

function GameCard({ gameCase }: { gameCase: Case }) {
  const { userData } = useUserDataStore();
  const { icon, price } = gameCase;

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
        <CoinIcon classname="w-6 h-6" />{" "}
      </div>
      <button
        className={`${
          !userData && "pointer-events-none grayscale "
        } absolute -bottom-4 translate-y-1/2 left-1/2 -translate-x-1/2`}
      >
        <MainButton text="Open" />
      </button>
    </div>
  );
}

export default GameCard;

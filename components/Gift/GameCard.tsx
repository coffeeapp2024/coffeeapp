import React from "react";
import MainButton from "../MainButton";
import Image from "next/image";
import type { GameInfo } from "@/lib/types";
import CoinIcon from "../CoinIcon";

function GameCard({ gameInfo }: { gameInfo: GameInfo }) {
  const { imgUrl, price } = gameInfo;

  return (
    <div className="aspect-square rounded-3xl pt-2 relative bg-transparent">
      <div className="relative h-2/3 mb-4">
        <Image
          src={imgUrl}
          fill={true}
          alt="game icon"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center pl-2">
        <span className="text-white font-bold text-xl">{price}</span>
        <CoinIcon classname="w-6 h-6" />
      </div>
      <button
        className={`absolute -bottom-4 translate-y-1/2 left-1/2 -translate-x-1/2`}
      >
        <MainButton text="Open" />
      </button>
    </div>
  );
}

export default GameCard;

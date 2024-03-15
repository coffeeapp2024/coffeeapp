import React from "react";
import MainButton from "../MainButton";
import Image from "next/image";
import { GameInfo } from "@/lib/types";

function GameCard({ gameInfo }: { gameInfo: GameInfo }) {
  const { imgUrl } = gameInfo;

  return (
    <div className="bg-white aspect-square rounded-3xl pt-2 relative ">
      <div className="relative h-1/2 mb-4">
        <Image
          src={imgUrl}
          fill={true}
          alt="game icon"
          className="object-contain"
        />
      </div>
      <div className="flex items-center justify-center flex-col gap-y-3"></div>
      <button
        className={`absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2`}
      >
        <MainButton text="Play" />
      </button>
    </div>
  );
}

export default GameCard;

"use client";

import React from "react";
import Image from "next/image";

function GameCard({ iconURL }: { iconURL: string }) {
  return (
    <div className="aspect-square px-24 relative bg-transparent">
      <Image
        src={iconURL}
        width={500}
        height={500}
        alt="game icon"
        className="object-contain w-full h-full"
      />
    </div>
  );
}

export default GameCard;

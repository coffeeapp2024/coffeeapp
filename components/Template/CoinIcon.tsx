import Image from "next/image";
import React from "react";

function CoinIcon({ className }: { className: string }) {
  return (
    <Image
      src="/icons/coinf.png"
      width={100}
      height={100}
      className={`relative ${className} mx-[2px] object-contain`}
      alt="Coin Icon"
    />
  );
}

export default CoinIcon;

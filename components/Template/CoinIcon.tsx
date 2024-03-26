import Image from "next/image";
import React from "react";

function CoinIcon({ classname }: { classname: string }) {
  return (
    <Image
      src="/icons/coin.png"
      width={100}
      height={100}
      className={`relative ${classname} mx-1`}
      alt="Coin Icon"
    />
  );
}

export default CoinIcon;

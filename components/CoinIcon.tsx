import Image from "next/image";
import React from "react";

function CoinIcon({ classname }: { classname: string }) {
  return (
    <div className={`relative ${classname}`}>
      <Image src="/coin.png" fill={true} alt="Coin Icon" />
    </div>
  );
}

export default CoinIcon;

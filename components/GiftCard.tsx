import Image from "next/image";
import React from "react";
import MainButton from "./MainButton";

function GiftCard() {
  return (
    <div
      style={{
        backgroundImage: `url(/img/img9.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="shadow-lg rounded-[30px] aspect-[6/7] pt-4 px-4 relative active:scale-[98%] duration-75 transition-transform"
    >
      <div className="relative w-full aspect-square animate-zoom-out">
        <Image src="/icons/coupon.png" fill={true} alt="coupon" className="" />
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
        <MainButton text="Buy" />
      </div>
    </div>
  );
}

export default GiftCard;

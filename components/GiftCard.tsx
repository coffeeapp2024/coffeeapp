import Image from "next/image";
import React from "react";

function GiftCard() {
  return (
    <div
      style={{
        backgroundImage: `url(/img/img9.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="shadow-lg rounded-[30px] aspect-[6/7] pt-4 px-4 relative active:scale-95 duration-75 transition-transform"
    >
      <div className="relative w-full aspect-square animate-zoom-out">
        <Image src="/icons/coupon.png" fill={true} alt="coupon" className="" />
      </div>
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 shadow-lg">
        <div className="bg-gradient-to-tr from-amber-300 to-amber-400 border-neutral-800 border-[1px] px-4 py-2 rounded-xl text-nowrap font-bold text-xl">
          Buy
        </div>
        <div className="absolute bg-neutral-950 w-full h-full rounded-xl -z-10 top-[3px] left-1 "></div>
      </div>
    </div>
  );
}

export default GiftCard;

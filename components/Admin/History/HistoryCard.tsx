import Image from "next/image";
import React from "react";

function HistoryCard() {
  return (
    <div className="bg-white h-32 py-2 pl-2 pr-4 rounded-2xl shadow-sm flex">
      {/* Left */}
      <div className="bg-neutral-50 h-full aspect-square rounded-xl overflow-hidden">
        {/* <Image
          src=""
          width={300}
          height={300}
          alt="Image Voucher"
          className="w-full h-full object-cover"
        /> */}
      </div>
      {/* Right */}
      <div className="pl-3 pt-1 basis-2/3">
        <div className="mb-2">
          <h3 className="font-bold">Lorem ipsum dolor sit amet.</h3>
          <p className="text-wrap text-sm">Lorem, ipsum dolor.</p>
          <p className="text-wrap text-sm">Lorem, ipsum dolor.</p>
          <p className="text-wrap text-sm">Lorem, ipsum dolor.</p>
          <p className="text-wrap text-sm">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;

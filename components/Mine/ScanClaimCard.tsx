import React from "react";
import QRScannerButton from "../QRScannerButton";
import Image from "next/image";

function ScanClaimCard({
  remainingTime,
  balance,
}: {
  remainingTime: string;
  balance: number | undefined;
}) {
  return (
    <div className="absolute bottom-1/4 sm:bottom-1/3 w-full px-3">
      <div className=" bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 flex px-3 py-3 items-center justify-between shadow-sm">
        <div className="flex items-center gap-x-2">
          <div>
            <div className="relative w-[68px] h-[68px]">
              <Image src="/hourclass.png" fill={true} alt="Coin Icon" />
            </div>
          </div>
          <div className="flex flex-col font-semibold">
            <span className="text-neutral-800 ">
              {remainingTime ? remainingTime : "0h 0m 0s to fill"}
            </span>
            <span className="text-neutral-500 text-sm">
              {balance} coin/hour
            </span>
          </div>
        </div>
        <div className="mr-1">
          <QRScannerButton />
        </div>
      </div>
    </div>
  );
}

export default ScanClaimCard;

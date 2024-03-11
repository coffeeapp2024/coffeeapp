import React from "react";
import QRScannerButton from "./QRScannerButton";
import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function ScanClaimCard() {
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
            <span className="text-neutral-800 ">11h 6m to fill</span>
            <span className="text-neutral-500 text-sm">0.1 coin/hour</span>
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

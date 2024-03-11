import React from "react";
import QRScannerButton from "./QRScannerButton";
import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function ScanClaimCard() {
  return (
    <div className="absolute bottom-1/3 w-full px-3">
      <div className=" bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 flex px-3 py-3 items-center justify-center shadow-sm">
        <div className="basis-3/4 flex items-center gap-x-2">
          <div>
            <div className="relative w-[68px] h-[68px]">
              <Image src="/hourclass.png" fill={true} alt="Coin Icon" />
            </div>
          </div>
          <div className="flex flex-col font-semibold">
            <span className="text-neutral-800 -mb-1">11h 6m to fill</span>
            <span className="text-neutral-500 ">0.1 coin/hour</span>
          </div>
        </div>
        <div className="basis-1/4">
          <QRScannerButton />
        </div>
      </div>
    </div>
  );
}

export default ScanClaimCard;

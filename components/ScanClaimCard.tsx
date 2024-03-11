import React from "react";
import QRScannerButton from "./QRScannerButton";
import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";

function ScanClaimCard() {
  return (
    <div className="absolute bottom-1/3 w-full px-3">
      <div className=" bg-white rounded-3xl border-[1px] border-neutral-300 h-24 flex p-3 items-center justify-center">
        <div className="basis-3/4 flex items-center gap-x-2">
          <div>
            <BoltIcon className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="flex flex-col text-neutral-500 font-bold">
            <span>11h 6m to fill</span>
            <span>0.1 point/hour</span>
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

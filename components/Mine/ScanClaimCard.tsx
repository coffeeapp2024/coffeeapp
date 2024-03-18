import { useEffect, useState } from "react";
import Image from "next/image";
import QRScannerButton from "./QRScannerButton";
import {
  calculateRemainingTimeInSeconds,
  formatSeconds,
} from "@/lib/timeActions";
import { useTimeStore, useUserDataStore } from "@/store/zustand";

function ScanClaimCard() {
  const { remainingTimeSeconds, setRemainingTimeSeconds } = useTimeStore();
  const { userData } = useUserDataStore();
  const { endTimeMine, balance } = userData ?? {};

  useEffect(() => {
    if (endTimeMine && balance != null) {
      const intervalId = setInterval(() => {
        const newRemainingTime = calculateRemainingTimeInSeconds(endTimeMine);
        setRemainingTimeSeconds(newRemainingTime);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setRemainingTimeSeconds(null);
    }
  }, [endTimeMine, balance, setRemainingTimeSeconds]);

  const remainingTimeFormatted = remainingTimeSeconds
    ? formatSeconds(remainingTimeSeconds)
    : "Scan QR to claim";

  return (
    <div className="absolute bottom-1/4 sm:bottom-1/3 w-full max-w-screen-sm px-3">
      <div className=" bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 flex px-3 py-3 items-center justify-between shadow-sm">
        <div className="flex items-center gap-x-2">
          <div>
            <div className="relative w-[68px] h-[68px]">
              <Image src="/hourclass.png" fill={true} alt="Coin Icon" />
            </div>
          </div>
          <div className="flex flex-col font-semibold">
            <span className="text-neutral-800 ">{remainingTimeFormatted}</span>
            <span className="text-neutral-500 text-sm">
              {balance ?? 0.1} coin/hour
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

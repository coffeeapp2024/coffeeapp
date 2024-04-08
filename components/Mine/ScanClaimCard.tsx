import { useEffect } from "react";
import Image from "next/image";
import { calculateRemainingTime, formatSeconds } from "@/lib/timeActions";
import { useTimeStore, useUserDataStore } from "@/store/zustand";
import ClaimCoinScanner from "./ClaimCoinScanner";

function ScanClaimCard() {
  const { remainingTime, setRemainingTime } = useTimeStore();
  const { userData } = useUserDataStore();
  const { endTimeMine, miningSpeed } = userData ?? {};

  useEffect(() => {
    if (endTimeMine) {
      const intervalId = setInterval(() => {
        const newRemainingTime = calculateRemainingTime(endTimeMine);
        setRemainingTime(newRemainingTime);
      }, 1000 * 60);

      return () => clearInterval(intervalId);
    } else {
      setRemainingTime(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTimeMine]);

  const remainingTimeFormatted = remainingTime
    ? formatSeconds(remainingTime)
    : "filled";

  return (
    <div className="absolute bottom-1/4 sm:bottom-1/3 w-full max-w-screen-sm px-3">
      <div className=" bg-background bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 flex px-3 py-3 items-center justify-between shadow-sm">
        <div className="flex items-center">
          <div className="mr-2">
            <Image
              src="/icons/hourclass.png"
              width={200}
              height={200}
              className="w-12 h-12 object-contain"
              alt="Time Icon"
            />
          </div>
          <div className="flex flex-col font-semibold">
            <span className="text-neutral-800">Storage</span>
            <span className="text-neutral-500 text-sm">
              {remainingTimeFormatted}
            </span>
            <span className="text-neutral-500 text-sm">
              {miningSpeed ?? "0"} MIN/hour
            </span>
          </div>
        </div>
        <div className="mr-1">
          <ClaimCoinScanner />
        </div>
      </div>
    </div>
  );
}

export default ScanClaimCard;

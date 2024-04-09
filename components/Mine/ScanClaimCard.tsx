import { useEffect } from "react";
import Image from "next/image";
import { calculateRemainingTime, formatSeconds } from "@/lib/timeActions";
import { useTimeStore, useUserDataStore } from "@/store/zustand";
import ClaimCoinScanner from "./ClaimCoinScanner";
import MiningProgress from "./MiningProgress";

function ScanClaimCard() {
  const { remainingTime, setRemainingTime } = useTimeStore();
  const { userData } = useUserDataStore();
  const { endTimeMine, miningSpeed } = userData ?? {};

  useEffect(() => {
    const updateRemainingTime = () => {
      if (endTimeMine) {
        const newRemainingTime = calculateRemainingTime(endTimeMine);
        setRemainingTime(newRemainingTime);
      } else {
        setRemainingTime(null);
      }
    };

    updateRemainingTime();

    const intervalId = setInterval(updateRemainingTime, 1000 * 60);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endTimeMine]);

  const remainingTimeFormatted = remainingTime
    ? formatSeconds(remainingTime)
    : "filled";

  return (
    <div className="absolute bottom-1/4 sm:bottom-1/3 w-full max-w-screen-sm px-3">
      <div className="relative bg-background bg-opacity-content1 rounded-3xl flex px-3 pb-3 pt-5 items-center justify-between shadow-sm overflow-hidden">
        <MiningProgress />
        <div className="flex items-center">
          <div className="mr-3 ml-3">
            <Image
              src="/icons/hourclass.png"
              width={200}
              height={200}
              className="w-12 h-12 object-contain"
              alt="Time Icon"
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-neutral-800 font-bold">Storage</span>
            <span className="text-secondary_text font-bold text-sm">
              {remainingTimeFormatted}
            </span>
            <span className="text-secondary_text font-semibold text-sm">
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

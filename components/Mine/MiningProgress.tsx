"use client";

import React, { useEffect } from "react";
import * as Progress from "@radix-ui/react-progress";
import { useMiningProgressStore, useUserDataStore } from "@/store/zustand";
import { calculateMiningProgressPercentage } from "@/lib/timeActions";

function MiningProgress() {
  const { userData } = useUserDataStore();
  const { startTimeMine, endTimeMine } = userData ?? {};
  const { miningProgressPercentage, setMiningProgressPercentage } =
    useMiningProgressStore();

  useEffect(() => {
    const interval = setInterval(() => {
      const percentage = calculateMiningProgressPercentage(
        startTimeMine,
        endTimeMine
      );
      setMiningProgressPercentage(percentage);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTimeMine, endTimeMine]);

  return (
    <Progress.Root
      className="absolute top-0 left-0 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
      value={miningProgressPercentage}
    >
      <Progress.Indicator
        className="h-full w-full flex-1 bg-gradient-to-r from-yellow-300 to-orange-300 transition-all"
        style={{ transform: `translateX(-${100 - miningProgressPercentage}%)` }}
      />
    </Progress.Root>
  );
}

export default MiningProgress;

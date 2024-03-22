import React, { useEffect } from "react";
import CoinIcon from "../CoinIcon";
import { updateCurrentCoin } from "@/lib/coinActions";
import { useCoinStore, useLevelStore, useUserDataStore } from "@/store/zustand";
function CurrentCoinInfo() {
  const { userData } = useUserDataStore();
  const { levels } = useLevelStore();
  const { currentCoin, setCurrentCoin } = useCoinStore();

  useEffect(() => {
    const { balance, endTimeMine } = userData ?? {};
    if (balance && endTimeMine && currentCoin) {
      const intervalId = setInterval(() => {
        const updatedCoin = updateCurrentCoin(
          balance,
          currentCoin,
          endTimeMine
        );
        setCurrentCoin(updatedCoin);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setCurrentCoin(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCoin, setCurrentCoin]);

  return (
    <div className="flex items-center justify-center flex-col text-white mt-24 ">
      <div className="flex items-center mb-1 ">
        <CoinIcon classname="w-12 h-12" />
        <span className="text-shadow font-extrabold text-4xl rounded-xl">
          {currentCoin?.toFixed(5) ?? Number(0).toFixed(5)}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-opacity-80 text-white font-semibold">
          Balance:
        </span>
        <div className="flex items-center">
          <CoinIcon classname="w-6 h-6 ml-1 " />
          <span className="font-bold text-shadow">
            {userData?.balance ?? (levels ? levels[0]?.balance : "N/A")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentCoinInfo;

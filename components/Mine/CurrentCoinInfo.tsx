import React, { useEffect } from "react";
import CoinIcon from "../CoinIcon";
import {
  calculateInitialCurrentCoin,
  updateCurrentCoin,
} from "@/lib/coinActions";
import { useCoinStore, useUserDataStore } from "@/store/zustand";
function CurrentCoinInfo() {
  const { userData } = useUserDataStore();
  const { balance, coin, startTimeMine, endTimeMine } = userData ?? {};
  const { currentCoin, setCurrentCoin } = useCoinStore();

  useEffect(() => {
    if (balance && startTimeMine) {
      const initialCoin = calculateInitialCurrentCoin(
        balance,
        coin || 0,
        startTimeMine
      );
      setCurrentCoin(initialCoin);
    }
  }, [balance, startTimeMine, coin, setCurrentCoin]);

  useEffect(() => {
    if (balance && endTimeMine) {
      const intervalId = setInterval(() => {
        const updatedCoin = updateCurrentCoin(
          balance,
          currentCoin || 0,
          endTimeMine
        );
        setCurrentCoin(updatedCoin);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setCurrentCoin(null);
    }
  }, [balance, endTimeMine, coin, currentCoin, setCurrentCoin]);

  return (
    <div className="flex items-center justify-center flex-col text-white mt-24 ">
      <div className="flex items-center mb-1 ">
        <CoinIcon classname="w-12 h-12" />
        <span className="text-shadow font-extrabold text-4xl rounded-xl">
          {currentCoin ? currentCoin.toFixed(5) : "0.00000"}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-opacity-80 text-white font-semibold">
          Balance:
        </span>
        <div className="flex items-center">
          <CoinIcon classname="w-6 h-6 ml-1 " />
          <span className="font-bold text-shadow">
            {balance ? balance : 0.1}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentCoinInfo;

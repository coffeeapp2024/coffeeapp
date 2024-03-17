import React, { useEffect, useState } from "react";
import CoinIcon from "../CoinIcon";
import { updateCurrentCoin } from "@/lib/coinActions";

function Claim({
  coin,
  balance,
  endTimeMine,
}: {
  coin: number | undefined;
  balance: number | undefined;
  endTimeMine: string | null | undefined;
}) {
  const [currentCoin, setCurrentCoin] = useState<number | undefined>(coin);

  useEffect(() => {
    if (balance && coin) {
      setCurrentCoin(coin);
      const intervalId = setInterval(() => {
        setCurrentCoin((prevCoin) => {
          return updateCurrentCoin(balance, prevCoin || 0, endTimeMine);
        });
      }, 1000); // Update every second

      return () => clearInterval(intervalId);
    } else {
      setCurrentCoin(0);
    }
  }, [balance, endTimeMine, coin]);

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

export default Claim;

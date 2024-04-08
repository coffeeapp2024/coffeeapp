import React, { useEffect, useState } from "react";
import CoinIcon from "../Template/CoinIcon";
import { calcBalanceInStorage } from "@/lib/userActions";
import { useUserDataStore } from "@/store/zustand";
function CurrentCoinInfo() {
  const { userData } = useUserDataStore();
  const [balanceInStorage, setBalanceInStorage] = useState(0);

  useEffect(() => {
    if (!userData) return;

    const intervalId = setInterval(() => {
      const balanceInStorage = calcBalanceInStorage(userData);
      setBalanceInStorage(balanceInStorage);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [userData]);

  return (
    <div className="flex items-center justify-center flex-col text-neutral-900 mt-24">
      <div className="font-semibold">In storage:</div>
      <div className="flex items-center mb-1 ">
        <CoinIcon className="w-9 h-9" />
        <span className="font-extrabold text-4xl rounded-xl">
          {balanceInStorage?.toFixed(5) ?? Number(0).toFixed(5)}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-opacity-70 font-semibold">MIN Balance:</span>
        <div className="flex items-center">
          <CoinIcon className="w-4 h-4 ml-1 " />
          <span className="font-bold">{userData?.balance ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default CurrentCoinInfo;

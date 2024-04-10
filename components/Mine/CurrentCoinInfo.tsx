import React, { useEffect, useState } from "react";
import CoinIcon from "../Template/CoinIcon";
import { calcBalanceInStorage } from "@/lib/userActions";
import { useBalanceInStorageStore, useUserDataStore } from "@/store/zustand";
function CurrentCoinInfo() {
  const { userData } = useUserDataStore();
  const { balanceInStorage, setBalanceInStorage } = useBalanceInStorageStore();

  useEffect(() => {
    if (!userData) return;

    const intervalId = setInterval(() => {
      const balanceInStorage = calcBalanceInStorage(userData);
      setBalanceInStorage(balanceInStorage);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <div className="flex items-center justify-center flex-col mt-24">
      <div className="font-semibold text-secondary_text">In storage:</div>
      <div className="flex items-center justify-start my-2 min-w-[69%] sm:min-w-fit">
        <CoinIcon className="w-11 h-11" />
        <span className="font-extrabold text-5xl rounded-xl">
          {balanceInStorage?.toFixed(6) ?? Number(0).toFixed(6)}
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="font-semibold text-secondary_text">MIN Balance:</span>
        <div className="flex items-center ml-1">
          <CoinIcon className="w-4 h-4 ml-1 " />
          <span className="font-bold ">
            {userData?.balance.toFixed(5) ?? Number(0).toFixed(6)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentCoinInfo;

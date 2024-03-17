import React from "react";
import CoinIcon from "../CoinIcon";

function Claim({
  coin,
  balance,
}: {
  coin: number | undefined;
  balance: number | undefined;
}) {
  return (
    <div className="flex items-center justify-center flex-col text-white mt-24 ">
      <div className="flex items-center mb-1 ">
        <CoinIcon classname="w-12 h-12" />
        <span className="text-shadow font-extrabold text-4xl rounded-xl">
          {coin ? coin : "0.00000"}
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

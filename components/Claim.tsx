import React from "react";
import CoinIcon from "./CoinIcon";

function Claim({ textColor }: { textColor: string }) {
  return (
    <div
      className={`flex items-center justify-center flex-col text-${textColor} mt-24`}
    >
      <div className="flex items-center mb-1">
        <CoinIcon classname="w-12 h-12" />
        <span className="font-extrabold text-4xl">0.090301</span>
      </div>
      <div className="flex items-center justify-center">
        <span className={`text-opacity-80 text-${textColor} font-semibold`}>
          Balance:
        </span>
        <div className="flex items-center">
          <CoinIcon classname="w-6 h-6 ml-1" />
          <span className="font-bold">0.1</span>
        </div>
      </div>
    </div>
  );
}

export default Claim;

import React from "react";
import CoinIcon from "./CoinIcon";

function Claim() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center mb-1">
        <CoinIcon classname="w-12 h-12" />
        <span className="text-neutral-800 font-extrabold text-4xl">
          0.090301
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="text-neutral-600 font-semibold">Balance:</span>
        <div className="flex items-center">
          <CoinIcon classname="w-6 h-6 ml-1" />
          <span className="font-bold text-neutral-800">0.1</span>
        </div>
      </div>
    </div>
  );
}

export default Claim;

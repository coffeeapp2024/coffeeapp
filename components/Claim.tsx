import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";
import React from "react";

function Claim() {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center gap-x-2 mb-2">
        <FireIcon className="h-10 w-10 text-yellow-500" />
        <span className="text-neutral-800 font-extrabold text-4xl">
          0.090301
        </span>
      </div>
      <div className="flex items-center justify-center">
        <span className="">Point Balance:</span>
        <div className="flex items-center gap-x-1">
          <FireIcon className="h-4 w-4 text-yellow-500 ml-2" />
          <span className="font-bold text-neutral-800">0.1</span>
        </div>
      </div>
    </div>
  );
}

export default Claim;

import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";
import React from "react";
import QRScannerButton from "./QRScannerButton";
import ProfileCard from "./ProfileCard";

function Claim({ session }: any) {
  return (
    <div className="h-full">
      <div className="h-3/5 pt-4">
        <ProfileCard session={session} />

        <div className="pt-20 flex items-center justify-center flex-col">
          <div className="mb-16">
            <h1 className="text-4xl font-extrabold text-neutral-800">
              The Coffee House
            </h1>
          </div>
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
      </div>
      <div className="mx-3 bg-white rounded-3xl border-[1px] border-neutral-300 h-24 flex p-3 items-center justify-center">
        <div className="basis-3/4 flex items-center gap-x-2">
          <div>
            <BoltIcon className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="flex flex-col text-neutral-500 font-bold">
            <span>11h 6m to fill</span>
            <span>0.1 point/hour</span>
          </div>
        </div>
        <div className="basis-1/4">
          <QRScannerButton />
        </div>
      </div>
    </div>
  );
}

export default Claim;

"use client";

import BoostDialog from "@/components/Boost/BoostDialog";
import GameDialog from "@/components/Game/GameDialog";
import React from "react";

function Page() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/cb/5c/5a/cb5c5a0ce2599d078ebd545d4bbe1a5c.jpg")',
      }}
      className="bg-neutral-100 min-h-[150vh] pb-40 px-4 pt-4"
    >
      <div className="grid grid-cols-2 gap-y-6 pb-40">
        <GameDialog />
        <BoostDialog />
        <div className=" col-span-2 rounded-3xl bg-background aspect-[3/1] w-full flex items-center justify-center border-neutral-100 border-1px shadow-sm">
          <p className="text-neutral-400">Coming Soon App</p>
        </div>
      </div>
    </div>
  );
}

export default Page;

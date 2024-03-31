"use client";

import BoostDialog from "@/components/Boost/BoostDialog";
import GameDialog from "@/components/Game/GameDialog";
import React from "react";

function Page() {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg/main-bg.jpg")',
      }}
      className="bg-neutral-100 min-h-[150vh] pb-40 px-4 pt-4"
    >
      <div className="grid grid-cols-2 gap-y-6 pb-40">
        <GameDialog />
        <BoostDialog />
        <div className=" col-span-2 rounded-3xl bg-background aspect-[3/1] w-full flex items-center justify-center  shadow-sm">
          <p className="text-neutral-400">Coming Soon App</p>
        </div>
      </div>
    </div>
  );
}

export default Page;

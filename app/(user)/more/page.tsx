"use client";

import BoostDialog from "@/components/Boost/BoostDialog";
import GameDialog from "@/components/Game/GameDialog";
import React from "react";

function Page() {
  return (
    <div className="bg-background min-h-screen px-4 pt-4">
      <div className="grid grid-cols-2 gap-4 pb-40">
        <GameDialog />
        <BoostDialog />
      </div>
    </div>
  );
}

export default Page;

"use client";

import BoostDialog from "@/components/Gift/BoostDialog";
import GameDialog from "@/components/Gift/GameDialog";
import React from "react";
import VoucherDialog from "@/components/Gift/VoucherDialog";

function Page() {
  return (
    <div
      style={{
        backgroundImage: `url("/bg/bg-scan.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-neutral-700 min-h-screen px-4 pt-4"
    >
      <div className="grid grid-cols-2 gap-4 pb-40">
        <GameDialog />
        <BoostDialog />
        <VoucherDialog />
      </div>
    </div>
  );
}

export default Page;

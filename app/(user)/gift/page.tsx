import BoostDialog from "@/components/Gift/BoostDialog";
import GameDialog from "@/components/Gift/GameDialog";
import React from "react";
import VoucherDialog from "@/components/Gift/VoucherDialog";

function page() {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/19/3a/27/193a2720e7f0edbc3508be3d29593a45.jpg)`,
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

export default page;

import Boost from "@/components/Gift/Boost";
import GiftCard from "@/components/GiftCard";
import RandomGame from "@/components/RandomGame";
import React from "react";

function page() {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/19/3a/27/193a2720e7f0edbc3508be3d29593a45.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-neutral-700 h-screen px-4 pt-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <RandomGame />
        <Boost />
        <GiftCard />
      </div>
    </div>
  );
}

export default page;

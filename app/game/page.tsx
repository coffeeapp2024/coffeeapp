import Boost from "@/components/Boost";
import GiftCard from "@/components/GiftCard";
import RandomGame from "@/components/RandomGame";
import React from "react";

function page() {
  return (
    <div className="bg-neutral-100 h-screen px-2 pt-16">
      <div className="grid grid-cols-2 gap-2">
        <RandomGame />
        <Boost />
        <GiftCard />
      </div>
    </div>
  );
}

export default page;

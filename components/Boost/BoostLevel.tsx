import { BoltIcon, FireIcon } from "@heroicons/react/24/outline";
import React from "react";

function BoostLevel({ icon, level, text }: any) {
  return (
    <div className="h-[72px] w-full border-1px border-neutral-600 rounded-[20px] flex overflow-hidden">
      <div className="aspect-square p-2 bg-neutral-50 flex items-center justify-center">
        {icon}
      </div>
      <div className="py-2 px-2">
        <span className="text-neutral-700 font-semibold">{level} Level</span>
        <p className="font-bold">{text}</p>
      </div>
    </div>
  );
}

export default BoostLevel;
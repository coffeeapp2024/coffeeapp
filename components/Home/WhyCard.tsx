import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

function WhyCard() {
  const textList = [
    "Lorem ipsum, dolor sit amet consectetur",
    "Ipsum, dolor sit amet consectetur",
    "Lorem ipsum, dolor sit amet consectetur",
    "Lorem ipsum, dolor sit ",
  ];

  return (
    <div className="rounded-2xl pt-6 pb-8 bg-neutral-800 mb-6">
      <div className="pb-4 border-b-[1px] border-opacity-20 border-white px-3 text-opacity-80 mb-6">
        <h3 className="font-bold text-xl">Why should have a sip here?</h3>
      </div>
      <div className=" pl-4 pr-1 flex flex-col gap-y-2">
        {textList.map((text, index) => (
          <div key={index} className="flex items-center justify-start gap-x-2">
            <CheckIcon className="w-6 h-6 text-green-500" />
            <p className="font-medium">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyCard;

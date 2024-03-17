import { useHomePageContentStore } from "@/store/zustand";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

function Info() {
  const { homePageContent } = useHomePageContentStore();

  const { address, open, name } = homePageContent ?? {};

  return (
    <div className="-mx-2 px-2">
      <h1 className="font-bold text-3xl mb-2">{name}</h1>
      <div className="text-neutral-500 mb-2">
        <p className="">Address: {address}</p>
        <p>Open: {open}</p>
      </div>
    </div>
  );
}

export default Info;

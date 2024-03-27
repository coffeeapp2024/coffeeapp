import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import CoinIcon from "../Template/CoinIcon";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function BoostDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="flex text-left relative w-full h-32 rounded-2xl bg-white bg-opacity-50 active:scale-[97%] transition-transform duration-75">
          <div className="basis-1/4 px-4 h-full flex items-center justify-center">
            <div className="aspect-square w-full flex justify-center items-center overflow-hidden bg-white bg-opacity-50 rounded-2xl">
              <Image
                src="/icons/boost/storage.png"
                width={300}
                height={300}
                className="w-14 h-14 object-cover ml-1"
                alt="Storage Icon"
              />
            </div>
          </div>
          <div className="basis-auto py-4 text-neutral-500 pr-10">
            <span className="font-semibold text-neutral-800">
              Wooden Storage
            </span>
            <div className="text-sm font-semibold mb-1">
              <p>Increase the fill</p>
              <p>time to claim less often</p>
            </div>
            {/* Level */}
            <div className="flex items-center gap-x-1 -ml-1">
              <CoinIcon classname="w-6 h-6 " />
              <span className=" font-semibold text-neutral-800">0.2</span>
              <div className="w-1 h-1 rounded-full mx-1 bg-neutral-600"></div>
              <span className="font-semibold">L1</span>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <ChevronRightIcon className="w-6 h-6 text-neutral-600" />
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="rounded-t-3xl h-[60vh] sm:max-w-screen-sm mx-auto border-none">
        <div>
          <h3 className="">Metal Storage</h3>
          <p>Better storage holds more MIN and you can claim it less often</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default BoostDrawer;

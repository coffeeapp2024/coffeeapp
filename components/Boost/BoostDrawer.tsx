import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Image from "next/image";
import CoinIcon from "../Template/CoinIcon";
import {
  ArrowUpIcon,
  BoltIcon,
  ChevronRightIcon,
  FireIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import BoostLevel from "./BoostLevel";

function BoostDrawer({ icons, level, levelTexts, text, name, price }: any) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="flex text-left items-center relative w-full rounded-[20px] bg-white bg-opacity-50 active:scale-[97%] transition-transform duration-75 shadow-sm">
          <div className="basis-1/4 px-4">
            <div className="aspect-square w-full flex justify-center items-center overflow-hidden bg-white bg-opacity-50 rounded-2xl">
              {icons[0]}
            </div>
          </div>
          <div className="basis-auto py-4 text-neutral-500 pr-10">
            <div className="font-semibold text-neutral-800">{name}</div>
            <div
              className="text-sm font-semibold mb-2"
              dangerouslySetInnerHTML={{
                __html: `<span>${text}</span>`,
              }}
            />
            {/* Level */}
            <div className="flex items-center gap-x-1 -ml-1">
              <CoinIcon classname="w-6 h-6 " />
              <span className=" font-semibold text-neutral-800">{price}</span>
              <div className="w-1 h-1 rounded-full mx-1 bg-neutral-600"></div>
              <span className="font-semibold">L1</span>
            </div>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <ChevronRightIcon className="w-6 h-6 text-neutral-600" />
          </div>
        </button>
      </DrawerTrigger>
      <DrawerContent className="rounded-t-3xl h-fit sm:max-w-screen-sm mx-auto border-none pb-6">
        <div className="px-12">
          <div className="mb-6 flex items-center text-center flex-col pt-6">
            <h3 className="font-extrabold text-3xl mb-3">Metal Storage</h3>
            <p className="font-semibold text-neutral-600 mx-1">
              Better storage holds more MIN and you can claim it less often
            </p>
          </div>

          <div className="flex flex-col items-center">
            <BoostLevel
              level={level + 1}
              text={levelTexts[1]}
              icon={icons[1]}
            />

            <ArrowUpIcon className="w-6 h-6 my-4" />

            <BoostLevel level={level} text={levelTexts[0]} icon={icons[0]} />
            <div className="flex items-center justify-center pt-8 pb-8">
              <CoinIcon classname="w-4 h-4" />
              <span className="font-semibold text-2xl">2</span>
            </div>
          </div>
        </div>
        <div className="px-6">
          <button className="h-[62px] px-2 py-2 rounded-3xl bg-neutral-800 text-white w-full font-medium text-xl">
            Upgrade
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default BoostDrawer;

"use client";

import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import CoinIcon from "../Template/CoinIcon";
import { ArrowUpIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import BoostLevel from "./BoostLevel";
import { toast } from "sonner";

function BoostDrawer({
  icons,
  level,
  levelTexts,
  nextName,
  onClickUpgrade,
  isMaxLevel,
  text,
  textInner,
  name,
  price,
}: any) {
  const [open, setOpen] = useState(false);
  // toast.info("Maximum level reached");
  return (
    <Drawer open={open} onOpenChange={setOpen}>
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
              <span className=" font-semibold text-neutral-800">
                {isMaxLevel ? 0 : price}
              </span>
              <div className="w-1 h-1 rounded-full mx-1 bg-neutral-600"></div>
              <span className="font-semibold">L{level}</span>
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
            <h3 className="font-extrabold text-3xl mb-3">
              {isMaxLevel ? "Maximum level" : nextName}
            </h3>
            <p className="font-semibold text-neutral-600 mx-1">{textInner}</p>
          </div>

          <div className="flex flex-col items-center">
            {!isMaxLevel && (
              <>
                <BoostLevel
                  level={level + 1}
                  text={levelTexts[1]}
                  icon={icons[1]}
                />

                <ArrowUpIcon className="w-6 h-6 my-4" />
              </>
            )}

            <BoostLevel level={level} text={levelTexts[0]} icon={icons[0]} />
            <div className="flex items-center justify-center pt-8 pb-8">
              {!isMaxLevel && (
                <>
                  <CoinIcon classname="w-5 h-5" />
                  <span className="font-semibold text-xl">{price}</span>
                </>
              )}
            </div>
          </div>
        </div>
        {!isMaxLevel && (
          <div className="px-6">
            <button
              onClick={() => {
                if (isMaxLevel) {
                  setOpen(false);
                  toast.info("Maximum level reached");
                  return;
                }
                onClickUpgrade();
              }}
              className="h-[62px] px-2 py-2 rounded-3xl bg-neutral-800 text-white w-full font-medium text-xl"
            >
              Upgrade
            </button>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export default BoostDrawer;

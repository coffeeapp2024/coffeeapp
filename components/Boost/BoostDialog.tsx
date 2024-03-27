import Image from "next/image";
import React from "react";
import { useUserDataStore } from "@/store/zustand";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import BoostDrawer from "./BoostDrawer";
import Fireplace from "./Fireplace";
import Storage from "./Storage";

function BoostDialog() {
  const { userData } = useUserDataStore();

  return (
    <Sheet>
      <SheetTrigger
        onClick={() => {
          !userData && toast.warning("Sign in to boost your balance");
        }}
      >
        <div className="relative active:scale-95 duration-75 transition-transform">
          <div className="shadow-lg rounded-[30px] aspect-[7/8] flex items-center justify-center overflow-hidden">
            <Image
              src={"/icons/rocket.gif"}
              height={400}
              width={100}
              alt="boost"
              unoptimized={true}
              className="scale-[1.6] w-full"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 shadow-lg">
            <div className="bg-gradient-to-tr from-amber-300 to-amber-400 border-neutral-800 border-[1px] px-4 py-2 rounded-xl text-nowrap font-bold text-xl">
              Boost
            </div>
            <div className="absolute bg-neutral-950 w-full h-full rounded-xl -z-10 top-[3px] left-1 "></div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent className="w-full pt-36 bg-neutral-100">
        <SheetClose className="fixed top-4 left-4">
          <button className="bg-neutral-200 p-2 rounded-xl">
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
        </SheetClose>
        <div className="flex flex-col gap-y-3">
          <Storage />
          <Fireplace />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BoostDialog;

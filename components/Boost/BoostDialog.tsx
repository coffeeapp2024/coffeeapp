import React from "react";
import { useUserDataStore } from "@/store/zustand";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Fireplace from "./Fireplace";
import Storage from "./Storage";
import AppCardTemplate from "../Template/AppCardTemplate";
import MainButton from "../MainButton";
import SheetContentLayout from "../ui/SheetContentLayout";
import CoinIcon from "../Template/CoinIcon";
import { Dialog } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import DialogContentTemplate from "../Template/DialogContentTemplate";

function BoostDialog() {
  const { userData } = useUserDataStore();

  return (
    <AppCardTemplate
      background="bg-yellow-400"
      icon={<RocketLaunchIcon className="w-7 h-7" />}
      imageURL="/img/rocket.png"
      info="Boost balance"
      name="Boost"
    >
      <Sheet>
        <SheetTrigger>
          <MainButton text="Boost" className="px-6" />
        </SheetTrigger>
        <SheetContentLayout backgroundImage="bg/main-bg.jpg" className="pt-20">
          <div className="flex items-center flex-col mb-20">
            <h3 className="text-neutral-500 font-bold text-lg mb-2">
              Your Balance
            </h3>
            <div className="text-5xl font-extrabold flex items-center mb-6">
              <CoinIcon className="w-11 h-11 mr-1" />
              <h1>{userData?.balance?.toFixed(5) ?? Number(0).toFixed(5)}</h1>
            </div>
            <div>
              <Dialog>
                <DialogTrigger>
                  <p className="font-bold text-blue-500">How it work</p>
                </DialogTrigger>
                <DialogContentTemplate imageURL="/bg/main-bg.jpg" />
              </Dialog>
            </div>
          </div>
          <div className="flex flex-col gap-y-3 px-3">
            <Storage />
            <Fireplace />
          </div>
        </SheetContentLayout>
      </Sheet>
    </AppCardTemplate>
  );
}

export default BoostDialog;

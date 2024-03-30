import Image from "next/image";
import React from "react";
import { useUserDataStore } from "@/store/zustand";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowLeftIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import Fireplace from "./Fireplace";
import Storage from "./Storage";
import AppCardTemplate from "../Template/AppCardTemplate";
import MainButton from "../MainButton";
import SheetContentLayout from "../ui/SheetContentLayout";

function BoostDialog() {
  return (
    <AppCardTemplate
      background="bg-yellow-400"
      icon={<RocketLaunchIcon className="w-8 h-8" />}
      imageURL="https://img.freepik.com/premium-photo/space-rocket-flying-high-sky-generative-ai_634053-3936.jpg"
      info="Boost mining speech"
      name="Boost"
    >
      <Sheet>
        <SheetTrigger>
          <MainButton text="Boost" className="px-6" />
        </SheetTrigger>
        <SheetContentLayout>
          <div className="flex flex-col gap-y-3">
            <Storage />
            <Fireplace />
          </div>
        </SheetContentLayout>
      </Sheet>
    </AppCardTemplate>
  );
}

export default BoostDialog;

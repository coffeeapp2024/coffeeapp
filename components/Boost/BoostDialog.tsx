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
import Fireplace from "./Fireplace";
import Storage from "./Storage";
import AppCardTemplate from "../Template/AppCardTemplate";
import MainButton from "../MainButton";
import SheetContentLayout from "../ui/SheetContentLayout";

function BoostDialog() {
  const { userData } = useUserDataStore();

  return (
    <AppCardTemplate icon="" imageURL="" info="" name="">
      <Sheet>
        <SheetTrigger>
          <MainButton text="Boost" className="px-6 h-12" />
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

import React from "react";
import { useUserDataStore } from "@/store/zustand";
import MainButton from "../MainButton";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SheetContentLayout from "../ui/SheetContentLayout";
import GameCardList from "./GameCardList";
import AppCardTemplate from "../Template/AppCardTemplate";
import { GiftIcon } from "@heroicons/react/24/outline";

function GameDialog() {
  return (
    <AppCardTemplate
      background="bg-fuchsia-300"
      icon={<GiftIcon className="w-7 h-7" />}
      imageURL=""
      info="Get random voucher"
      name="Cases Boom"
    >
      <Sheet>
        <SheetTrigger>
          <MainButton text="Open" className="px-6" />
        </SheetTrigger>
        <SheetContentLayout>
          <div>
            <GameCardList />
          </div>
        </SheetContentLayout>
      </Sheet>
    </AppCardTemplate>
  );
}

export default GameDialog;

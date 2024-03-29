import React from "react";
import { useUserDataStore } from "@/store/zustand";
import MainButton from "../MainButton";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SheetContentLayout from "../ui/SheetContentLayout";
import GameCardList from "./GameCardList";
import AppCardTemplate from "../Template/AppCardTemplate";

function GameDialog() {
  const { userData } = useUserDataStore();

  return (
    <AppCardTemplate icon="" imageURL="" info="" name="">
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

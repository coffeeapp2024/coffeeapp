import Image from "next/image";
import React from "react";
import MainButton from "../MainButton";
import CloseDialogButton from "../Template/CloseDialogButton";
import GameCardList from "./GameCardList";
import { useUserDataStore } from "@/store/zustand";
import { toast } from "sonner";
import SheetContentLayout from "../ui/SheetContentLayout";
import { Sheet, SheetTrigger } from "../ui/sheet";

function GameDialog() {
  const { userData } = useUserDataStore();

  return (
    <Sheet>
      <SheetTrigger
        className="col-span-2"
        onClick={() => {
          !userData && toast.warning("Sign in to play game");
        }}
      >
        <div className="relative active:scale-95 duration-75 transition-transform">
          <div className="shadow-lg rounded-[30px] aspect-[7/6] flex items-center justify-center overflow-hidden">
            <Image
              src={"/icons/game.gif"}
              height={400}
              width={100}
              alt="boost"
              unoptimized={true}
              className="scale-[1.6] w-full"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <MainButton text="Open" />
          </div>
        </div>
      </SheetTrigger>
      <SheetContentLayout>
        <GameCardList />
        <CloseDialogButton />
      </SheetContentLayout>
    </Sheet>
  );
}

export default GameDialog;

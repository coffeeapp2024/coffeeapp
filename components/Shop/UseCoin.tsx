"use client";
import * as Switch from "@radix-ui/react-switch";
import React from "react";
import { usePriceTypeStore } from "@/store/zustand";
import CoinIcon from "../Template/CoinIcon";

function UseCoin() {
  const { isPriceInCoins, togglePriceType } = usePriceTypeStore();

  return (
    <div className="fixed bottom-32 right-4 bg-red-600 p-3 rounded-full ">
      <Switch.Root checked={isPriceInCoins} onCheckedChange={togglePriceType}>
        <Switch.Thumb />
      </Switch.Root>
    </div>
  );
}

export default UseCoin;

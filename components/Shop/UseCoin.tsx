"use client";

import React from "react";
import { Switch } from "../ui/switch";
import { usePriceTypeStore } from "@/store/zustand";

function UseCoin() {
  const { isPriceInCoins, togglePriceType } = usePriceTypeStore();

  return (
    <div className="fixed bottom-32 bg-red-600 p-4 ">
      <Switch checked={isPriceInCoins} onCheckedChange={togglePriceType} />
    </div>
  );
}

export default UseCoin;

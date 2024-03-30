"use client";

import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { usePriceTypeStore } from "@/store/zustand";

function ShoppingBagDialog() {
  const { isPriceInCoins } = usePriceTypeStore();

  return (
    <Sheet>
      <SheetTrigger className="fixed right-[9px] top-[68%] bg-neutral-50 shadow-sm p-2 rounded-2xl flex items-center justify-center">
        <ShoppingBagIcon className="w-7 h-7" />
        <div
          className={`${
            isPriceInCoins ? "bg-pink-300" : "bg-neutral-400"
          } absolute w-5 h-5 rounded-full  -top-1 -left-1 flex items-center justify-center`}
        >
          <span className="text-xs font-semibold text-white">
            {isPriceInCoins ? 3 : 0}
          </span>
        </div>
      </SheetTrigger>
      <SheetContentLayout>
        <div></div>
      </SheetContentLayout>
    </Sheet>
  );
}

export default ShoppingBagDialog;

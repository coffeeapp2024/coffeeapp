"use client";

import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  useCashCartStore,
  useCoinCartStore,
  usePriceTypeStore,
} from "@/store/zustand";
import CartItem from "./CartItem";

function ShoppingBagDialog() {
  const { isPriceInCoins } = usePriceTypeStore();
  const { cartItems: cashCartItems } = useCashCartStore();
  const { cartItems: coinCartItems } = useCoinCartStore();

  const currentCart = isPriceInCoins ? coinCartItems : cashCartItems;

  return (
    <Sheet>
      <SheetTrigger className="fixed right-[9px] top-[68%] bg-white bg-opacity-90 shadow-sm p-2 rounded-2xl flex items-center justify-center">
        <ShoppingBagIcon className="w-7 h-7" />
        <div
          className={`${
            isPriceInCoins ? "bg-pink-300" : "bg-neutral-400"
          } absolute w-5 h-5 rounded-full -top-1 -left-1 flex items-center justify-center`}
        >
          <span className="text-xs font-semibold text-white">
            {currentCart.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContentLayout backgroundImage="/bg/bg3.jpg" className="pt-24">
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <h2 className="text-center font-semibold text-xl">My Cart</h2>
        </div>
        {currentCart.map((_, index) => (
          <CartItem isCoinCartItem={isPriceInCoins} key={index} index={index} />
        ))}
      </SheetContentLayout>
    </Sheet>
  );
}

export default ShoppingBagDialog;

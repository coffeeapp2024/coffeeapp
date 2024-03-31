"use client";

import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  useCashCartStore,
  useCoinCartStore,
  usePriceTypeStore,
} from "@/store/zustand";
import CartItem from "./CartItem";

function ShoppingBagDialog() {
  const { isPriceInCoins } = usePriceTypeStore();
  const { cartItems: cashCartItems, addToCart: addToCashCart } =
    useCashCartStore();
  const { cartItems: coinCartItems, addToCart: addToCoinCart } =
    useCoinCartStore();

  return (
    <Sheet>
      <SheetTrigger className="fixed right-[9px] top-[68%] bg-white bg-opacity-90 shadow-sm p-2 rounded-2xl flex items-center justify-center">
        <ShoppingBagIcon className="w-7 h-7" />
        <div
          className={`${
            isPriceInCoins ? "bg-pink-300" : "bg-neutral-400"
          } absolute w-5 h-5 rounded-full  -top-1 -left-1 flex items-center justify-center`}
        >
          <span className="text-xs font-semibold text-white">
            {isPriceInCoins ? coinCartItems.length : cashCartItems.length}
          </span>
        </div>
      </SheetTrigger>
      <SheetContentLayout className="pt-24">
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <h2 className="text-center font-semibold text-xl">My Cart</h2>
        </div>
        {coinCartItems.map((coinCartItem, index) => (
          <CartItem isCoinCartItem={true} key={index} index={index} />
        ))}
      </SheetContentLayout>
    </Sheet>
  );
}

export default ShoppingBagDialog;

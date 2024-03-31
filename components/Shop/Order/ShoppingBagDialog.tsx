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
            isPriceInCoins ? "bg-pink-300" : "bg-purple-400"
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
        <div className="flex flex-col gap-y-3">
          {currentCart.map((_, index) => (
            <CartItem
              isCoinCartItem={isPriceInCoins}
              key={index}
              index={index}
            />
          ))}
        </div>

        {/* Checkout */}
        <div className="bg-white bg-opacity-90 w-full absolute bottom-0 left-0 rounded-t-3xl flex flex-col justify-between overflow-hidden pt-4">
          <div className="px-4 text-xl font-semibold flex items-center justify-between">
            <span>Total:</span>
            <span>123$</span>
          </div>

          <div className="w-full px-3 py-3">
            <button className="bg-neutral-800 w-full h-14 font-semibold text-white rounded-3xl">
              Checkout
            </button>
          </div>
        </div>
      </SheetContentLayout>
    </Sheet>
  );
}

export default ShoppingBagDialog;

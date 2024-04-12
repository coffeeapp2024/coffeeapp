"use client";

import React, { useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import {
  useCashCartStore,
  usePointCartStore,
  usePriceTypeStore,
} from "@/store/zustand";

import CartItem from "./CartItem";
import ShoppingCartIcon from "@/components/Icon/Navbar/Regular/ShoppingCartIcon";
import Checkout from "./Checkout";

function ShoppingBagDialog() {
  const [open, setOpen] = useState(false);
  const { isPriceInPoint } = usePriceTypeStore();
  const { cartItems: cashCartItems } = useCashCartStore();
  const { cartItems: PointCartItems } = usePointCartStore();

  const currentCart = isPriceInPoint ? PointCartItems : cashCartItems;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="fixed right-[9px] top-[68%] bg-white bg-opacity-90 shadow-sm p-2 rounded-2xl flex items-center justify-center">
        <ShoppingCartIcon className="w-7 h-7" />
        <div
          className={`${
            isPriceInPoint ? "bg-pink-300" : "bg-purple-400"
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
            <CartItem key={index} index={index} />
          ))}
        </div>

        <Checkout setOpenCart={setOpen} />
      </SheetContentLayout>
    </Sheet>
  );
}

export default ShoppingBagDialog;

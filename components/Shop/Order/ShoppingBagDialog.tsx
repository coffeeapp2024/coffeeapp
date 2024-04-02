"use client";

import React, { useMemo, useState } from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import {
  useCashCartStore,
  useCoinCartStore,
  usePriceTypeStore,
  useUserDataStore,
} from "@/store/zustand";

import CartItem from "./CartItem";
import CoinIcon from "@/components/Template/CoinIcon";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";
import ShoppingCartIcon from "@/components/Icon/Navbar/Regular/ShoppingCartIcon";

function ShoppingBagDialog() {
  const [open, setOpen] = useState(false);
  const { userData, setUserData } = useUserDataStore();
  const { isPriceInCoins } = usePriceTypeStore();
  const { cartItems: cashCartItems, clearCart: clearCashCart } =
    useCashCartStore();
  const { cartItems: coinCartItems, clearCart: clearCoinCart } =
    useCoinCartStore();

  const currentCart = isPriceInCoins ? coinCartItems : cashCartItems;

  // Calculate total price
  const totalPrice = useMemo(() => {
    return currentCart.reduce((acc, currentItem) => {
      return acc + currentItem.totalPrice;
    }, 0);
  }, [currentCart]);

  const handleCheckout = async () => {
    if (!userData) {
      toast.error("Please sign in to complete your purchase.");
      return;
    }

    if (!isPriceInCoins) {
      toast.error(
        "Cash checkout option is coming soon. Currently, only coin checkout is available."
      );
      return;
    }

    if (totalPrice === 0) {
      toast.info("Your cart is empty. Add items to proceed to checkout.");
      return;
    }

    const updatedCollection = [...(userData.collection || []), ...currentCart];
    const promise = async () => {
      // Add cart items to the user's collection
      await updateUserDataAfterPurchase(userData, setUserData, totalPrice, [
        {
          key: "collection",
          value: updatedCollection,
        },
      ]);

      // Clear the cart after checkout
      // isPriceInCoins ? clearCoinCart() : clearCoinCart();
      clearCoinCart();

      setOpen(false);
    };

    try {
      await toast.promise(promise(), {
        loading: "Loading...",
        success: "Checkout successful! Visit your collection, scan, and enjoy!",
        error: (error) => error.message,
      });
    } catch (error) {
      console.error("Error deleting keys:", error);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="fixed right-[9px] top-[68%] bg-white bg-opacity-90 shadow-sm p-2 rounded-2xl flex items-center justify-center">
        <ShoppingCartIcon className="w-7 h-7" />
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
          <div className="px-6 text-xl font-semibold flex items-center justify-between">
            <span>Total:</span>
            <div className="flex items-center justify-center">
              {isPriceInCoins && <CoinIcon className="w-5 h-5" />}
              <span>{totalPrice}</span>
              {!isPriceInCoins && "k"}
            </div>
          </div>

          <div className="w-full px-3 py-3">
            <button
              onClick={handleCheckout}
              className="bg-primary-foreground w-full h-14 font-semibold text-white rounded-3xl"
            >
              Checkout
            </button>
          </div>
        </div>
      </SheetContentLayout>
    </Sheet>
  );
}

export default ShoppingBagDialog;

"use client";

import CoinIcon from "@/components/Template/CoinIcon";
import { useCashCartStore, useCoinCartStore } from "@/store/zustand";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

function CartItem({
  isCoinCartItem,
  index,
}: {
  isCoinCartItem: boolean;
  index: number;
}) {
  const {
    cartItems: cashCartItems,
    setItem: setCashCartItem,
    removeFromCart: removeFromCashCart,
  } = useCashCartStore();
  const {
    cartItems: coinCartItems,
    setItem: setCoinCartItem,
    removeFromCart: removeFromCoinCart,
  } = useCoinCartStore();
  const cartItem = isCoinCartItem ? coinCartItems[index] : cashCartItems[index];
  const { product, quantity, toppings, size, totalPrice } = cartItem;
  const { img, name } = product;

  const handleIncrement = () => {
    if (cartItem.quantity < 0) {
      return;
    }
    // Increment the quantity of the item in the cart
    const updatedQuantity = cartItem.quantity + 1;
    const updatedTotalPrice =
      (cartItem.totalPrice * updatedQuantity) / cartItem.quantity;

    // Update the cart items in the appropriate store
    isCoinCartItem
      ? setCoinCartItem(index, {
          ...cartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        })
      : setCashCartItem(index, {
          ...cartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        });
  };

  const handleDecrement = () => {
    // Ensure the quantity does not go below 0
    if (cartItem.quantity <= 1) {
      return;
    }
    // Decrement the quantity of the item in the cart
    const updatedQuantity = cartItem.quantity - 1;
    const updatedTotalPrice =
      (cartItem.totalPrice * updatedQuantity) / cartItem.quantity;

    // Update the cart items in the appropriate store
    isCoinCartItem
      ? setCoinCartItem(index, {
          ...cartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        })
      : setCashCartItem(index, {
          ...cartItem,
          quantity: updatedQuantity,
          totalPrice: updatedTotalPrice,
        });
  };

  const handleDelete = () => {
    // Remove the item from the cart
    isCoinCartItem ? removeFromCoinCart(index) : removeFromCashCart(index);
  };
  return (
    <div className="relative h-32 bg-white bg-opacity-70 w-full p-2 rounded-2xl flex shadow-sm">
      {/* Left */}
      <div className="bg-neutral-200 h-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={img}
          width={300}
          height={300}
          alt="Image Voucher"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="pl-3 pt-1 basis-2/3 flex flex-col justify-between">
        <div className="mb-2">
          <h4 className="font-bold">{name}</h4>
          <p className="text-wrap text-sm">Size: {size}</p>
          <p className="text-wrap text-sm">Add ins: {toppings}</p>
        </div>

        {/* Bottom */}

        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center w-fit font-semibold">
            {isCoinCartItem && <CoinIcon className="w-4 h-4 -ml-[1px]" />}
            {totalPrice}
            {!isCoinCartItem && "k"}
          </span>

          {/* Quantity */}
          <div className="flex items-center justify-between gap-x-2 -mr-3">
            <button
              className="p-2 rounded-full bg-white bg-opacity-95"
              onClick={handleDecrement}
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="text-wrap text-sm font-medium">{quantity}</span>
            <button
              className="p-2 rounded-full bg-white bg-opacity-80"
              onClick={handleIncrement}
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Remove */}

      <button
        className="absolute right-2 top-[14px] text-neutral-700"
        onClick={handleDelete}
      >
        <TrashIcon className="w-4 h-4" />
      </button>
    </div>
  );
}

export default CartItem;

import CoinIcon from "@/components/Template/CoinIcon";
import { CartItem } from "@/store/zustand";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function CartItem({
  cartItem,
  isCoinCartItem,
}: {
  cartItem: CartItem;
  isCoinCartItem: boolean;
}) {
  const { product, quantity, toppings, size, totalPrice } = cartItem;
  const { img, name } = product;

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
      <div className="pl-3 pt-1 pb-1 basis-2/3 flex flex-col justify-between">
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
            {!isCoinCartItem && "$"}
          </span>

          <div className="flex items-center justify-between gap-x-2">
            <button className="p-2 rounded-full bg-white bg-opacity-95">
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="text-wrap text-sm">{quantity}</span>
            <button className="p-2 rounded-full bg-white bg-opacity-80">
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Remove */}
      {/* <button className="absolute right-3 top-9 text-neutral-700">
        <TrashIcon className="w-5 h-5" />
      </button> */}
    </div>
  );
}

export default CartItem;

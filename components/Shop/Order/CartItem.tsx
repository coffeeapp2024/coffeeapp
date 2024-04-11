"use client";

import CoinIcon from "@/components/Template/CoinIcon";
import { getSelectedProductDetails } from "@/lib/userActions";
import {
  useCashCartStore,
  usePointCartStore,
  usePriceTypeStore,
  useProductStore,
  useToppingsStore,
} from "@/store/zustand";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function CartItem({ index }: { index: number }) {
  const { isPriceInPoint } = usePriceTypeStore();
  const { products } = useProductStore();
  const { toppings } = useToppingsStore();
  const {
    cartItems: cashCartItems,
    setItem: setCashCartItem,
    removeFromCart: removeFromCashCart,
  } = useCashCartStore();
  const {
    cartItems: PointCartItems,
    setItem: setPointCartItem,
    removeFromCart: removeFromPointCart,
  } = usePointCartStore();

  const cartItem = isPriceInPoint
    ? PointCartItems[index]
    : cashCartItems[index];
  const { productId, quantity, toppingIds, sizeId, totalPrice, id } = cartItem;

  const { selectedProduct, selectedSize, selectedToppingNames } =
    getSelectedProductDetails(
      products,
      toppings,
      productId,
      sizeId,
      toppingIds
    );

  const { img, name } = selectedProduct ?? {};

  const handleUpdateQuantity = (number: -1 | 1): void => {
    if (quantity <= 1 && number === -1) return;

    const updatedQuantity = quantity + number;
    const updatedTotalPrice = (totalPrice * updatedQuantity) / quantity;

    const updatedCartItem = {
      ...cartItem,
      quantity: updatedQuantity,
      totalPrice: updatedTotalPrice,
    };

    isPriceInPoint
      ? setPointCartItem(index, updatedCartItem)
      : setCashCartItem(index, updatedCartItem);

    return;
  };

  const handleDelete = () => {
    isPriceInPoint ? removeFromPointCart(id) : removeFromCashCart(id);
  };

  const isToppings = selectedToppingNames.length > 0;

  return (
    <div className="relative h-32 bg-white bg-opacity-70 w-full p-2 rounded-2xl flex shadow-sm">
      {/* Left */}
      <div className="bg-neutral-200 basis-1/3 h-full aspect-square rounded-xl overflow-hidden">
        {img && (
          <Image
            src={img}
            width={300}
            height={300}
            alt="Image Voucher"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Right */}
      <div className="pl-3 pt-1 basis-2/3 flex flex-col justify-between flex-grow">
        <div className="mb-2">
          <h4 className="font-bold">{name}</h4>
          <p className="text-nowrap text-neutral-700 text-sm font-semibold ">
            {selectedSize && ` Size: ${selectedSize}`}
          </p>
          <p className="text-nowrap overflow-ellipsis text-neutral-700 text-sm font-semibold">
            {isToppings && `Add ins: ${selectedToppingNames}`}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="flex items-center justify-center w-fit font-semibold">
            {isPriceInPoint && <CoinIcon className="w-4 h-4 -ml-[1px]" />}
            {totalPrice}
            {!isPriceInPoint && "k"}
          </span>

          {/* Quantity */}
          <div className="flex items-center justify-between gap-x-2">
            <button
              className="p-2 rounded-full bg-white bg-opacity-95"
              onClick={() => handleUpdateQuantity(-1)}
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="font-medium text-sm">{quantity}</span>
            <button
              className="p-2 rounded-full bg-white bg-opacity-80"
              onClick={() => handleUpdateQuantity(1)}
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

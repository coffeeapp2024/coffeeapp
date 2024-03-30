"use client";

import { Topping, usePriceTypeStore, useToppingsStore } from "@/store/zustand";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CoinIcon from "../Template/CoinIcon";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Product, Size } from "@/store/storeTypes";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const { isPriceInCoins } = usePriceTypeStore();
  const { toppings } = useToppingsStore();
  const { img, name, sizes, toppingIds, info } = product ?? {};
  const [productToppings, setProductToppings] = useState<Topping[] | []>([]);

  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const defaultSize = sizes.find((size) => size.isDefault);
    if (defaultSize) {
      setSelectedSize(defaultSize);
    }
  }, [sizes]);

  useEffect(() => {
    if (toppings && toppingIds) {
      const filteredToppings = toppings.filter((topping) =>
        toppingIds.includes(topping.id)
      );
      setProductToppings(filteredToppings);
    }
  }, [toppings, toppingIds]);

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleTopping = (topping: Topping) => {
    if (selectedToppings.some((t) => t.id === topping.id)) {
      setSelectedToppings(
        selectedToppings.filter((item) => item.id !== topping.id)
      );
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  useEffect(() => {
    const calculateTotalPrice = (): number => {
      let totalPrice = 0;
      if (selectedSize) {
        // Add cash price if available
        if (!isPriceInCoins) {
          totalPrice += selectedSize.price;
        } else {
          // Add point price if available
          totalPrice += selectedSize.point;
        }
      }
      selectedToppings.forEach((topping) => {
        // Add cash price if available
        if (!isPriceInCoins) {
          totalPrice += topping.price;
        } else {
          // Add point price if available
          totalPrice += topping.point;
        }
      });
      totalPrice *= quantity;
      return totalPrice;
    };

    setTotalPrice(calculateTotalPrice());
  }, [selectedSize, selectedToppings, quantity, isPriceInCoins]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="text-start rounded-3xl overflow-hidden shadow-sm bg-neutral-50">
        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
          {img && (
            <Image
              src={img}
              width={500}
              height={500}
              className="object-scale-down"
              alt="Product Image"
            />
          )}
        </div>
        <div className="px-3 pt-2 pb-3">
          <h3 className="font-bold text-neutral-600 text-sm truncate">
            {name}
          </h3>

          <span className="font-bold text-neutral-800">
            {isPriceInCoins ? (
              <span className="flex items-center text-base">
                <CoinIcon className="w-4 h-4 -ml-[1px]" />
                {sizes.find((size) => size.isDefault)?.point}
              </span>
            ) : (
              <>{sizes.find((size) => size.isDefault)?.price}k</>
            )}
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[fit] rounded-t-3xl border-none bg-transparent px-2">
        <div className="bg-transparent mt-2 h-full rounded-[30px] overflow-hidden">
          {/* Image */}
          <div className="w-full aspect-square overflow-hidden bg-neutral-50">
            <Image src={img} width={500} height={500} alt="Pick Product" />
          </div>

          {/* Info */}
          <div className="bg-white h-fit py-3 px-3 rounded-3xl -translate-y-6 ">
            <h2 className="font-bold text-3xl mb-1">{name}</h2>
            <p className="text-neutral-600">{info}</p>

            <div className="border-t-1px -mx-3 my-3"></div>

            <h3 className="font-bold text-xl mb-2">Sizes</h3>
            <div className="flex items-center justify-start gap-x-2 mb-3">
              {sizes.map((size, index) => (
                <div
                  className={`h-10 px-4 ${
                    size.size === selectedSize?.size
                      ? isPriceInCoins
                        ? "bg-green-500 text-white"
                        : "bg-purple-500 text-white"
                      : "bg-neutral-100 text-neutral-700"
                  } rounded-[30px] flex items-center justify-center font-medium `}
                  key={index}
                  onClick={() => setSelectedSize(size)}
                >
                  <span className="">{size.size}</span>
                </div>
              ))}
            </div>

            <h3 className="font-bold text-xl mb-2">Add ins</h3>
            <div className="flex items-center justify-start gap-x-2 mb-6">
              {productToppings.map((topping, index) => (
                <button
                  onClick={() => toggleTopping(topping)}
                  className={`h-10 px-4 ${
                    selectedToppings.some(
                      (selected) => selected.id === topping.id
                    )
                      ? isPriceInCoins
                        ? "bg-green-500 text-white"
                        : "bg-purple-500 text-white"
                      : "bg-neutral-100 text-neutral-700"
                  } rounded-[30px] flex items-center justify-center font-medium `}
                  key={index}
                >
                  <span>{topping.name}</span>
                </button>
              ))}
            </div>

            <div className="border-t-1px -mx-3 my-3"></div>

            <div className="flex items-center justify-between gap-x-3">
              {/* Amount */}
              <div className="basis-2/5 h-14 px-3 bg-neutral-200 rounded-2xl w-full flex items-center justify-between ">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center cursor-pointer"
                  onClick={decreaseQuantity}
                >
                  <MinusIcon className="w-5 h-5" />
                </div>
                <span>{quantity}</span>
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center cursor-pointer"
                  onClick={increaseQuantity}
                >
                  <PlusIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Add to cart */}
              <div
                // onClick={}
                className={`${
                  isPriceInCoins ? "bg-green-500" : "bg-purple-500"
                } basis-3/5 text-white text-lg font-medium h-14 rounded-2xl flex items-center justify-between px-4`}
              >
                <div>Add to cart</div>
                <span className="font-semibold flex items-center justify-center">
                  {isPriceInCoins && <CoinIcon className="w-5 h-5 -ml-1" />}
                  {totalPrice}
                  {!isPriceInCoins && "$"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;

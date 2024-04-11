"use client";

import {
  CartType,
  Topping,
  useCashCartStore,
  usePointCartStore,
  usePriceTypeStore,
  useToppingsStore,
} from "@/store/zustand";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CoinIcon from "../Template/CoinIcon";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { Product, Size } from "@/store/storeTypes";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
import { generateUniqueId } from "@/lib/utils";

function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const { isPriceInPoint } = usePriceTypeStore();
  const { toppings } = useToppingsStore();

  const { img, name, sizes, toppingIds, info } = product;
  const [productToppings, setProductToppings] = useState<Topping[] | []>([]);

  const [selectedSize, setSelectedSize] = useState<Size>(sizes[0]);
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [quantity, setQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { addToCart: addToCashCart } = useCashCartStore();
  const { addToCart: addToPointCart } = usePointCartStore();

  useEffect(() => {
    const defaultSize = sizes.find((size) => size.isDefault);
    setSelectedSize(defaultSize || sizes[0]);
  }, [sizes]);

  useEffect(() => {
    if (toppings && toppingIds) {
      const filteredToppings = toppings.filter((topping) =>
        toppingIds.includes(topping.id)
      );
      setProductToppings(filteredToppings);
    }
  }, [toppings, toppingIds]);

  const handleUpdateQuantity = (number: -1 | 1) => {
    if (quantity <= 1 && number === -1) return;

    setQuantity(quantity + number);
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
        if (isPriceInPoint) {
          totalPrice += selectedSize.point;
        } else {
          totalPrice += selectedSize.price;
        }
      }
      selectedToppings.forEach((topping) => {
        if (isPriceInPoint) {
          totalPrice += topping.point;
        } else {
          totalPrice += topping.price;
        }
      });
      totalPrice *= quantity;
      return totalPrice;
    };

    setTotalPrice(calculateTotalPrice());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSize, selectedToppings, quantity]);

  const handleAddToCart = () => {
    const itemToAdd = {
      id: generateUniqueId(),
      productId: product.id,
      sizeId: selectedSize?.id,
      toppingIds: selectedToppings.map((topping) => topping.id),
      quantity: quantity,
      totalPrice: totalPrice,
      priceType: (isPriceInPoint ? "point" : "cash") as CartType,
    };

    isPriceInPoint ? addToPointCart(itemToAdd) : addToCashCart(itemToAdd);
    setOpen(false);
    toast.success("Item added to cart successfully");
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger className="text-start rounded-3xl overflow-hidden shadow-sm bg-white bg-opacity-60">
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
            {isPriceInPoint ? (
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
                    size.name === selectedSize?.name
                      ? isPriceInPoint
                        ? "bg-secondary-foreground text-white"
                        : "bg-primary-foreground text-white"
                      : "bg-neutral-100 text-neutral-700"
                  } rounded-[30px] flex items-center justify-center font-medium `}
                  key={index}
                  onClick={() => setSelectedSize(size)}
                >
                  <span>{size.name}</span>
                </div>
              ))}
            </div>

            {/* Add ins */}
            {productToppings.length > 0 && (
              <>
                <h3 className="font-bold text-xl mb-2">Add ins</h3>
                <div className="flex items-center justify-start gap-x-2">
                  {productToppings.map((topping, index) => (
                    <button
                      onClick={() => toggleTopping(topping)}
                      className={`h-10 px-4 ${
                        selectedToppings.some(
                          (selected) => selected.id === topping.id
                        )
                          ? isPriceInPoint
                            ? "bg-secondary-foreground text-white"
                            : "bg-primary-foreground text-white"
                          : "bg-neutral-100 text-neutral-700"
                      } rounded-[30px] flex items-center justify-center font-medium `}
                      key={index}
                    >
                      <span>{topping.name}</span>
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="border-t-1px -mx-3 mb-3 mt-6"></div>

            <div className="flex items-center justify-between gap-x-3">
              {/* Amount */}
              <div className="basis-2/5 h-14 px-3 bg-neutral-200 rounded-2xl w-full flex items-center justify-between ">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center cursor-pointer"
                  onClick={() => handleUpdateQuantity(-1)}
                >
                  <MinusIcon className="w-5 h-5" />
                </div>
                <span>{quantity}</span>
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center cursor-pointer"
                  onClick={() => handleUpdateQuantity(1)}
                >
                  <PlusIcon className="w-5 h-5" />
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={() => handleAddToCart()}
                className={`${
                  isPriceInPoint
                    ? "bg-secondary-foreground"
                    : "bg-primary-foreground"
                } basis-3/5 text-white text-lg font-medium h-14 rounded-2xl flex items-center justify-between px-4`}
              >
                <div>Add to cart</div>
                <span className="font-semibold flex items-center justify-center">
                  {isPriceInPoint && <CoinIcon className="w-5 h-5 -ml-1" />}
                  {totalPrice}
                  {!isPriceInPoint && "k"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductCard;

"use client";

import { usePriceTypeStore, useSelectProductStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";
import CoinIcon from "../Template/CoinIcon";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

function ProductDialog() {
  const { isPriceInCoins } = usePriceTypeStore();
  const { open, product, toggleOpen } = useSelectProductStore();
  const { img, name, sizes } = product ?? {};
  return (
    <Drawer open={open} onOpenChange={toggleOpen}>
      <DrawerTrigger></DrawerTrigger>
      <DrawerContent className="h-[90%] rounded-t-3xl border-none bg-white px-2">
        <div className="bg-white h-full mt-4 mb-20 rounded-[30px] overflow-hidden">
          <div className="w-full aspect-square bg-neutral-50">
            <Image src={img} width={500} height={500} alt="Pick Product" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ProductDialog;

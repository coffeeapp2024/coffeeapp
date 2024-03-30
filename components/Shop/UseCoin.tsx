"use client";
import React, { ReactNode } from "react";
import { usePriceTypeStore } from "@/store/zustand";
import CoinIcon from "../Template/CoinIcon";
import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Currency from "../Icon/Currency";

type IconProps = {
  "data-checked": string;
  width: string;
  height: string;
  isSelected: boolean;
  className: string;
};

type CheckboxIconProps = ReactNode | ((props: IconProps) => ReactNode);

function UseCoin() {
  const { isPriceInCoins, togglePriceType } = usePriceTypeStore();

  return (
    <div className="fixed top-1/4 -right-4  p-3 rounded-full rotate-90">
      <Switch
        isSelected={isPriceInCoins}
        onValueChange={() => {
          togglePriceType();
        }}
        defaultSelected
        size="md"
        color="secondary"
        startContent={<MoonIcon />}
        endContent={<Currency className="w-6 h-6 " />}
      ></Switch>
    </div>
  );
}

export default UseCoin;

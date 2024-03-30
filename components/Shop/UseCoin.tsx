"use client";
import React, { ReactNode } from "react";
import { usePriceTypeStore } from "@/store/zustand";
import CoinIcon from "../Template/CoinIcon";
import { Switch } from "@nextui-org/switch";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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
    <div className="fixed bottom-32 right-4  p-3 rounded-full rotate-90 ">
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      ></Switch>
    </div>
  );
}

export default UseCoin;

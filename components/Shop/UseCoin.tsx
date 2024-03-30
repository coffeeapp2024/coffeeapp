"use client";
import React, { ReactNode } from "react";
import { usePriceTypeStore } from "@/store/zustand";
import { Switch } from "@nextui-org/switch";
import Currency from "../Icon/Currency";
import Coin2D from "../Icon/Coin2D";

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
    <div className="fixed top-2/3 -right-4 p-3 rounded-full rotate-90">
      <Switch
        isSelected={isPriceInCoins}
        onValueChange={() => {
          togglePriceType();
        }}
        defaultSelected
        size="md"
        color="success"
        startContent={<Coin2D />}
        endContent={<Currency />}
      ></Switch>
    </div>
  );
}

export default UseCoin;

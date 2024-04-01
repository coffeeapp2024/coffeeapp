"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import GameCard from "./GameCard";
import { useCaseStore } from "@/store/zustand";
import RandomVoucherDialog from "./RandomVoucherDialog";
import MainButton from "../MainButton";
import { useRandomVoucherStore, useUserDataStore } from "@/store/zustand";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";
import { Case } from "@/store/storeTypes";
import CoinIcon from "../Template/CoinIcon";
import { updateDocumentByKeyCondition } from "@/lib/firebaseUtils";

export default function GameCardList() {
  const [api, setApi] = React.useState<CarouselApi>();
  const { cases } = useCaseStore();
  const [currentCase, setCurrentCase] = useState<Case | null>(null);
  const { userData, setUserData } = useUserDataStore();
  const { setOpen, setRandomVoucherId } = useRandomVoucherStore();
  const {
    price,
    voucherIdList: caseVoucherIdList,
    quantity,
    id,
  } = currentCase ?? {};
  if (!id || !quantity || !price || !caseVoucherIdList) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!api || !cases) {
      return;
    }

    // Initialize currentCase based on cases
    if (cases.length > 0) {
      setCurrentCase(cases[0]);
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      const selectedCase = cases[selectedIndex];
      setCurrentCase(selectedCase);
    });
  }, [api, cases]);

  const handlePlay = async () => {
    if (!userData || !caseVoucherIdList.length || !price) return;

    const randomIndex = Math.floor(Math.random() * caseVoucherIdList.length);
    const randomVoucherId = caseVoucherIdList[randomIndex];

    const updatedVouchers = [
      ...(userData.voucherIdList || []),
      randomVoucherId,
    ];

    const promise = async () => {
      const updatedUserData = await updateUserDataAfterPurchase(
        userData,
        setUserData,
        price,
        [
          {
            key: "voucherIdList",
            value: updatedVouchers,
          },
        ]
      );

      const updatedQuantity = quantity - 1;
      const updatedCase = { ...currentCase, quantity: updatedQuantity };

      await updateDocumentByKeyCondition("cases", "id", id, updatedCase);
      if (updatedUserData) {
        setRandomVoucherId(randomVoucherId);
        setOpen(true);
      }
    };

    const updatedUserData = await toast.promise(promise(), {
      loading: "Proccessing...",
      success: "Well done! You've earned a random voucher!",
      error: (error) => error.message,
    });
    if (updatedUserData) {
      setRandomVoucherId(randomVoucherId);
      setOpen(true);
    }
  };

  const isHidden =
    !caseVoucherIdList || caseVoucherIdList.length <= 0 || !userData;

  const quantityColors = [
    "text-green-400 ",
    "text-blue-400",
    "text-fuchsia-400",
    "text-red-400",
  ];
  return (
    <div className="-mx-6 w-full relative h-screen">
      <Carousel
        setApi={setApi}
        opts={{
          startIndex: 0,
        }}
        className="-mx-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <CarouselContent className="-ml-0 pb-12">
          {cases?.map((gameCase, index) => (
            <CarouselItem key={index} className="basis-[100%] pl-0">
              <GameCard iconURL={gameCase.iconURL} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-1/2 -translate-x-1/2 top-[6%] flex items-center flex-col -z-10">
          <span className="text-neutral-500 font-medium">Cases in stock:</span>
          <h2
            className={`text-8xl font-extrabold opacity-30 ${
              quantityColors[id - 1]
            }`}
          >
            {quantity ? String(quantity).padStart(5, "0") : "00000"}
          </h2>
        </div>
      </Carousel>

      {/* Open */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%]">
        <div className=" bg-neutral-50 rounded-3xl flex flex-col items-center justify-between pb-3 pt-4 gap-y-3 z-10 border-2 border-neutral-800">
          <div>
            <div className="flex items-center justify-center pl-2 mb-2">
              <CoinIcon className="w-6 h-6" />
              <span className="font-bold text-xl text-foreground">{price}</span>
            </div>
            <p className="text-sm font-semibold">
              Be first and find vouchers inside
            </p>
          </div>
          <button
            onClick={handlePlay}
            className={`${isHidden && "pointer-events-none grayscale"} w-[80%]`}
          >
            <MainButton className="w-full" text="Open" />
          </button>
        </div>
        <div className="w-full h-full absolute -bottom-[4px] left-[4px] bg-neutral-900 rounded-3xl -z-50"></div>
      </div>
      <RandomVoucherDialog />
    </div>
  );
}

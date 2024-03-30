import React, { useState } from "react";
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

export default function GameCardList() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentCase, setCurrentCase] = useState<Case | null>(null);
  const { cases } = useCaseStore();
  const { userData, setUserData } = useUserDataStore();
  const { price, voucherIdList: caseVoucherIdList } = currentCase ?? {};
  const { setOpen, setRandomVoucherId } = useRandomVoucherStore();

  React.useEffect(() => {
    if (!api || !cases) {
      return;
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      const selectedCase = cases[selectedIndex]; // Lấy gameCase tương ứng với index được chọn
      setCurrentCase(selectedCase);
      console.log("current case", currentCase);
    });
  }, [api]);

  const handlePlay = async () => {
    if (!userData || !caseVoucherIdList || !caseVoucherIdList.length || !price)
      return;

    const randomIndex = Math.floor(Math.random() * caseVoucherIdList.length);
    const randomVoucherId = caseVoucherIdList[randomIndex];

    const updatedVouchers = [
      ...(userData.voucherIdList || []),
      randomVoucherId,
    ];

    const updatedUserData = await toast.promise(
      updateUserDataAfterPurchase(userData, setUserData, price, [
        {
          key: "voucherIdList",
          value: updatedVouchers,
        },
      ]),
      {
        loading: "Proccessing...",
        success: "Well done! You've earned a random voucher!",
        error: (error) => error.message,
      }
    );
    if (updatedUserData) {
      setRandomVoucherId(randomVoucherId);
      setOpen(true);
    }
  };

  const isHidden =
    !caseVoucherIdList || caseVoucherIdList.length <= 0 || !userData;

  return (
    <div className="-mx-6 w-full">
      <Carousel
        setApi={setApi}
        opts={{
          startIndex: 0,
        }}
        className="-mx-0"
      >
        <CarouselContent className="-ml-0 pb-12">
          {cases?.map((gameCase, index) => (
            <CarouselItem key={index} className="basis-[100%] pl-0">
              <GameCard iconURL={gameCase.iconURL} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center pl-2">
        <CoinIcon className="w-6 h-6" />
        <span className="font-bold text-xl text-foreground">{price}</span>
      </div>
      <button
        onClick={handlePlay}
        className={`${
          isHidden && "pointer-events-none grayscale"
        } absolute bottom-20 translate-y-1/2 left-1/2 -translate-x-1/2`}
      >
        <MainButton text="Open" />
      </button>
      <RandomVoucherDialog />
    </div>
  );
}

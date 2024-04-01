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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[95%]">
        <div className=" bg-neutral-50 rounded-3xl flex flex-col items-center justify-between py-4 gap-y-3 z-10 border-2 border-neutral-800">
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

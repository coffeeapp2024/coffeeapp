import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BoostCardList from "./BoostCardList";
import CloseDialogButton from "../CloseDialogButton";
import VoucherCardList from "./VoucherCardList";
import MainButton from "../MainButton";

function VoucherDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          style={{
            backgroundImage: `url(/img/img9.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="shadow-lg rounded-[30px] aspect-[6/7] pt-4 px-4 relative active:scale-[98%] duration-75 transition-transform"
        >
          <div className="relative w-full aspect-square animate-zoom-out">
            <Image
              src="/icons/coupon.png"
              fill={true}
              alt="coupon"
              className=""
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
            <MainButton text="Buy" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none p-0 py-8">
        <VoucherCardList />

        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default VoucherDialog;

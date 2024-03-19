import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BoostCardList from "./BoostCardList";
import CloseDialogButton from "../CloseDialogButton";
import VoucherCardList from "./VoucherCardList";
import MainButton from "../MainButton";
import { toast } from "sonner";
import { useUserDataStore } from "@/store/zustand";

function VoucherDialog() {
  const { userData } = useUserDataStore();

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => {
          !userData && toast.warning("Sign in to buy voucher");
        }}
      >
        <div
          style={{
            backgroundImage: `url(/img/img9.jpg)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="shadow-lg rounded-[30px] aspect-[7/8] pt-4 px-4 relative active:scale-[98%] duration-75 transition-transform"
        >
          <div className="relative w-full aspect-square animate-zoom-out">
            <Image
              src="/icons/coupon.png"
              fill={true}
              sizes="(max-width: 640px) 100vw, 640px"
              alt="coupon"
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

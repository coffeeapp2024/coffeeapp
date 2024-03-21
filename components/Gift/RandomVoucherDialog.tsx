import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import CloseDialogButton from "../CloseDialogButton";
import Image from "next/image";
import { useRandomVoucherStore, useVoucherStore } from "@/store/zustand";

function RandomVoucherDialog() {
  const { open, randomVoucherId, setOpen } = useRandomVoucherStore();

  const { vouchers } = useVoucherStore();

  const voucher = vouchers?.find((voucher) => voucher.id === randomVoucherId);

  const { imageURL, info } = voucher ?? {};

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none px-6">
        <div className="relative bg-neutral-50 w-full aspect-[3/2] rounded-3xl py-4 px-4 h-fit  flex items-center justify-between flex-col ">
          <div className="overflow-hidden">
            {imageURL && (
              <Image
                src={imageURL}
                alt="level icon"
                width={700}
                height={300}
                className="object-contain"
              />
            )}
          </div>
          <span className="font-semibold text-neutral-700 text-xl">{info}</span>
        </div>
        <DialogClose className="w-0 h-0"></DialogClose>
        {/* <CloseDialogButton /> */}
      </DialogContent>
    </Dialog>
  );
}

export default RandomVoucherDialog;

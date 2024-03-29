import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import CloseDialogButton from "../Template/CloseDialogButton";
import Image from "next/image";
import { useRandomVoucherStore, useVoucherStore } from "@/store/zustand";
import UserVoucherCard from "../Mine/Profile/UserVoucher/UserVoucherCard";

function RandomVoucherDialog() {
  const { open, randomVoucherId, setOpen } = useRandomVoucherStore();

  const { vouchers } = useVoucherStore();

  const voucher = vouchers?.find((voucher) => voucher.id === randomVoucherId);

  const { imageURL, info, name } = voucher ?? {};

  console.log("rrandomVoucherId", randomVoucherId);

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none px-6">
        <div className="w-full">
          <div>
            {imageURL && (
              <Image
                src={imageURL}
                width={500}
                height={500}
                alt="Voucher Image"
                className="object-cover"
              />
            )}
          </div>

          <div></div>
        </div>
        <DialogClose className="w-0 h-0"></DialogClose>
        {/* <CloseDialogButton /> */}
      </DialogContent>
    </Dialog>
  );
}

export default RandomVoucherDialog;

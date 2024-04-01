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
import DialogContentTemplate from "../Template/DialogContentTemplate";

function RandomVoucherDialog() {
  const { open, randomVoucherId, setOpen } = useRandomVoucherStore();

  const { vouchers } = useVoucherStore();

  const voucher = vouchers?.find((voucher) => voucher.id === randomVoucherId);

  const { imageURL, info, name } = voucher ?? {};

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <DialogTrigger></DialogTrigger>
      {imageURL && <DialogContentTemplate imageURL={imageURL} />}
    </Dialog>
  );
}

export default RandomVoucherDialog;

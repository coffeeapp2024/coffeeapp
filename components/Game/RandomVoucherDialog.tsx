import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useRandomVoucherStore, useVoucherStore } from "@/store/zustand";
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

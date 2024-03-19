import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../CloseDialogButton";
import Image from "next/image";
import { useVoucherStore } from "@/store/zustand";

function RandomVoucherDialog({ randomVoucherId }: { randomVoucherId: string }) {
  const [open, setOpen] = useState(true);

  const { vouchers } = useVoucherStore();

  const voucher = vouchers.find((voucher) => voucher.id === randomVoucherId);

  const { imageURL, info } = voucher ?? {};

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent className="bg-transparent px-2">
        <div className="bg-neutral-50 aspect-[8/7]   rounded-3xl pt-3 px-3 relative ">
          <div className="relative h-1/2 mb-4">
            {imageURL && (
              <Image
                src={imageURL}
                alt="level icon"
                width={400}
                height={400}
                className="object-contain"
              />
            )}
          </div>
          <div className="flex items-center justify-center flex-col gap-y-4">
            <span className="font-semibold text-neutral-700 text-xl">
              {info}
            </span>
          </div>
        </div>
        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default RandomVoucherDialog;

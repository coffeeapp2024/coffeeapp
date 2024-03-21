import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../../CloseDialogButton";
import { useUserDataStore, useVoucherStore } from "@/store/zustand";
import QRCode from "qrcode.react";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

function UserVoucher({ voucherId }: { voucherId: string }) {
  const { vouchers } = useVoucherStore();
  const { userId } = useUserDataStore();
  const voucher = vouchers?.find((voucher) => voucher.id === voucherId);

  if (!voucher) return null;

  const { imageURL, info, id } = voucher;

  return (
    <Dialog>
      <DialogTrigger
        onClick={() =>
          toast.info(
            "Scan this voucher at the coffee shop to claim your offer."
          )
        }
        className="bg-white shadow-sm aspect-[3/2] border-[1px] w-full rounded-3xl pt-3 px-3 relative "
      >
        <div className="relative h-3/4 mb-2">
          <Image
            src={imageURL}
            width={600}
            height={600}
            alt="level icon"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="text-lg text-neutral-900 font-medium">{info}</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full px-10  bg-transparent border-none   shadow-none">
        <div className="flex items-center justify-center aspect-square rounded-2xl bg-white shadow-sm overflow-hidden">
          <QRCode
            id={`qr-code-voucher-${id}`}
            size={340}
            value={`${userId}-${id}`}
            includeMargin={true}
          />
        </div>
        <DialogClose className="w-0 h-0"></DialogClose>
        {/* <CloseDialogButton /> */}
      </DialogContent>
    </Dialog>
  );
}

export default UserVoucher;

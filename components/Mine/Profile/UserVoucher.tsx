import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../../Template/CloseDialogButton";
import {
  useOpenQrVoucherStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import QRCode from "qrcode.react";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

function UserVoucher({
  voucherId,
  index,
}: {
  voucherId: string;
  index: number;
}) {
  const { setIndex, setVoucherId, setOpen } = useOpenQrVoucherStore();
  const { vouchers } = useVoucherStore();
  const voucher = vouchers?.find((voucher) => voucher.id === voucherId);

  if (!voucher) return null;

  const { imageURL, info } = voucher;

  return (
    <button
      onClick={() => {
        toast.info("Scan this voucher at the coffee shop to claim your offer.");

        setOpen(true);
        setIndex(index);
        setVoucherId(voucherId);
      }}
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
    </button>
  );
}

export default UserVoucher;

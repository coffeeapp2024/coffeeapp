import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../../CloseDialogButton";
import { useUserDataStore, useVoucherStore } from "@/store/zustand";
import QRCode from "qrcode.react";

function UserVoucher({ voucherId }: { voucherId: string }) {
  const { vouchers } = useVoucherStore();
  const { userId } = useUserDataStore();
  const voucher = vouchers?.find((voucher) => voucher.id === voucherId);

  if (!voucher) return null;

  const { imageURL, info, id } = voucher;

  return (
    <Dialog>
      <DialogTrigger className="bg-white shadow-sm aspect-[4/3] border-[1px] w-full rounded-3xl pt-3 px-3 relative ">
        <div className="relative h-3/4 mb-2">
          <Image
            src={imageURL}
            fill={true}
            sizes="(max-width: 640px) 100vw, 640px"
            alt="level icon"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="text-lg font-medium">{info}</span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-2xl w-full min-h-96 bg-white border-none">
        <QRCode
          id={`qr-code-voucher-${id}`}
          scale={4}
          value={`${id}-${userId}`}
          // marginSize={3}
          includeMargin={true}
        />
        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default UserVoucher;

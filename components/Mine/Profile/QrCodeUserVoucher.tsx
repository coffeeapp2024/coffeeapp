import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useOpenQrVoucherStore, useUserDataStore } from "@/store/zustand";
import QRCode from "qrcode.react";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";

function QrCodeUserVoucher() {
  const { open, voucherId, index, setOpen } = useOpenQrVoucherStore();
  const { userId } = useUserDataStore();

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger
        onClick={() => {
          toast.info(
            "Scan this voucher at the coffee shop to claim your offer."
          );
        }}
      ></DialogTrigger>
      <DialogContent className="w-full px-10  bg-transparent border-none   shadow-none">
        <div className="flex items-center justify-center aspect-square rounded-2xl bg-white shadow-sm overflow-hidden">
          <QRCode
            id={`qr-code-voucher-${voucherId}`}
            size={340}
            value={`${userId}-${voucherId}-${index}`}
            includeMargin={true}
          />
        </div>
        <DialogClose className="w-0 h-0"></DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default QrCodeUserVoucher;

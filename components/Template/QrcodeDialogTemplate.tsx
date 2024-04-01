import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import { DialogClose, DialogContent } from "../ui/dialog";
import QRCode from "qrcode.react";
import { useQrCodeStore } from "@/store/zustand";

function QrcodeDialogTemplate() {
  const { open, id, setOpen } = useQrCodeStore();

  if (!id) return;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger></DialogTrigger>
      <DialogContent className="w-full px-10  bg-transparent border-none shadow-none">
        <div className="flex items-center justify-center aspect-square rounded-2xl bg-white shadow-sm overflow-hidden">
          <QRCode id={id} size={340} value={id} includeMargin={true} />
        </div>
        <DialogClose className="w-0 h-0"></DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default QrcodeDialogTemplate;

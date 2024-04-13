"use client";

import SendIcon from "@/components/Icon/SendIcon";
import PrimaryDialogContent from "@/components/Template/PrimaryDialogContent";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { SendForm } from "./SendForm";
import Image from "next/image";

function SendProductDialog({
  handlePopoverClose,
}: {
  handlePopoverClose: any;
}) {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    handlePopoverClose(!open);
    setOpen(!open);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger className="flex items-center gap-x-2">
        <SendIcon className="w-5 h-5" />
        <span className="text-sm text-nowrap font-medium">
          Send to your friend
        </span>
      </DialogTrigger>
      <PrimaryDialogContent>
        <div className="flex flex-col h-full w-full justify-between items-center pb-4">
          <div className="h-2/3">
            <Image
              src="/img/send-love.png"
              alt="Send Image"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <SendForm />
        </div>
      </PrimaryDialogContent>
    </Dialog>
  );
}

export default SendProductDialog;

"use client";

import SendIcon from "@/components/Icon/SendIcon";
import PrimaryDialogContent from "@/components/Template/PrimaryDialogContent";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";

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
        <div className="bg-neutral-300 h-1/3"></div>
        <div></div>
      </PrimaryDialogContent>
    </Dialog>
  );
}

export default SendProductDialog;

"use client";

import SendIcon from "@/components/Icon/SendIcon";
import PrimaryDialogContent from "@/components/Template/PrimaryDialogContent";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { SendForm } from "./SendForm";
import Image from "next/image";
import { toast } from "sonner";
import { useCurrentUserProductStore, useUserDataStore } from "@/store/zustand";
import {
  addProductToUserByEmail,
  removeProductAndUpdateUser,
} from "@/lib/productActions";

function SendProductDialog({ setOpenPopover }: { setOpenPopover: any }) {
  const { currentUserProduct, setCurrentUserProduct } =
    useCurrentUserProductStore();
  const { userData } = useUserDataStore();
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpenPopover(!open);
    setOpen(!open);
  };

  const handleSendToFriend = async (email: string) => {
    if (!userData || !currentUserProduct) {
      toast.error("Something went wrong.");
      return;
    }
    if (userData.email === email) {
      toast.error("You cannot send a gift to yourself!");
      return;
    }

    const isProductAdded = await addProductToUserByEmail(
      email,
      currentUserProduct
    );
    if (!isProductAdded) return;

    await removeProductAndUpdateUser(userData, currentUserProduct.id);
    setCurrentUserProduct(null);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger className="flex items-center gap-x-2">
        <SendIcon className="w-5 h-5" />
        <span className="text-sm text-nowrap font-medium">
          Send to your friend
        </span>
      </DialogTrigger>
      <PrimaryDialogContent isShowCloseButton={false}>
        <div className="flex flex-col h-full w-full justify-between items-center pb-5">
          <div className="h-2/3">
            <Image
              src="/img/send-love.png"
              alt="Send Image"
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
          <SendForm handleSendToFriend={handleSendToFriend} />
        </div>
      </PrimaryDialogContent>
    </Dialog>
  );
}

export default SendProductDialog;

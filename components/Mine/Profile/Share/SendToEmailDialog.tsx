"use client";

import SendIcon from "@/components/Icon/SendIcon";
import PrimaryDialogContent from "@/components/Template/PrimaryDialogContent";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import React, { useState } from "react";
import { SendForm } from "./SendForm";
import Image from "next/image";
import { toast } from "sonner";
import {
  useCurrentUserProductStore,
  useCurrentUserVoucherStore,
  useSendItemTypeStore,
  useUserDataStore,
} from "@/store/zustand";
import {
  addProductToUserByEmail,
  removeUserProductById,
} from "@/lib/productActions";
import {
  addVoucherToUserByEmail,
  removeUserVoucherById,
} from "@/lib/voucherActions";

function SendToEmailDialog({ setOpenPopover }: { setOpenPopover: any }) {
  const { userData } = useUserDataStore();
  const [open, setOpen] = useState(false);

  const { currentUserProduct } = useCurrentUserProductStore();
  const { currentUserVoucher } = useCurrentUserVoucherStore();
  const { itemType } = useSendItemTypeStore();

  const onOpenChange = () => {
    setOpenPopover(!open);
    setOpen(!open);
  };

  const handleSendProductToEmail = async (email: string) => {
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

    await removeUserProductById(userData, currentUserProduct.id);
    setOpen(false);
  };

  const handleSendVoucherToEmail = async (email: string) => {
    if (!userData || !currentUserVoucher) {
      toast.error("Something went wrong.");
      return;
    }
    if (userData.email === email) {
      toast.error("You cannot send a gift to yourself!");
      return;
    }

    const isVoucherAdded = await addVoucherToUserByEmail(
      email,
      currentUserVoucher.id
    );
    if (!isVoucherAdded) return;

    await removeUserVoucherById(userData, currentUserVoucher.id);
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
          <SendForm
            handleSendToFriend={
              itemType === "product"
                ? handleSendProductToEmail
                : handleSendVoucherToEmail
            }
          />
        </div>
      </PrimaryDialogContent>
    </Dialog>
  );
}

export default SendToEmailDialog;
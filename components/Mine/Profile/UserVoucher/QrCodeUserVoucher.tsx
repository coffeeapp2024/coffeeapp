import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useOpenQrVoucherStore, useUserDataStore } from "@/store/zustand";
import QRCode from "qrcode.react";
import { DialogClose } from "@radix-ui/react-dialog";
import { toast } from "sonner";
import { listenForVoucherIdListChanges } from "@/lib/firebaseFunctions";
import { isEqual } from "lodash";
import { UserData } from "@/store/storeTypes";
import { Unsubscribe } from "firebase/firestore";

function QrCodeUserVoucher() {
  const { open, voucherId, index, setOpen } = useOpenQrVoucherStore();
  const { userId, userData, setUserData } = useUserDataStore();

  useEffect(() => {
    let unsubscribe: Unsubscribe | undefined = undefined;
    if (userId && userData && open) {
      unsubscribe = listenForVoucherIdListChanges(userId, (voucherIdList) => {
        console.log("Listening voucherIdList changes");
        if (isEqual(voucherIdList, userData.voucherIdList)) {
          console.log("VoucherIdList not change");
        } else {
          // Update the user data with the new voucherIdList
          const updatedUserData: UserData = {
            ...userData,
            voucherIdList: voucherIdList,
          };

          setOpen(false);
          setTimeout(() => {
            setUserData(updatedUserData);
          }, 2000);

          toast.success("Voucher has been successfully scanned!");

          console.log("Update the user data with the new voucherIDList");
        }
      });
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [open, setOpen, setUserData, userData, userId]);

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

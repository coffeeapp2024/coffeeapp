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
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";
import { listenForKeyChangeInDoc } from "@/lib/firebaseUtils";

function QrCodeUserVoucher() {
  const { open, voucherId, index, setOpen } = useOpenQrVoucherStore();
  const { userId, userData, setUserData } = useUserDataStore();

  useEffect(() => {
    if (userId && userData && open) {
      const unsubscribe = listenForKeyChangeInDoc(
        "users",
        userId,
        "voucherIdList",
        (voucherIdList) => {
          if (!isEqual(voucherIdList, userData.voucherIdList)) {
            console.log("VoucherIdList not change");
            return;
          }
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
        }
      );
      return unsubscribe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return <QrcodeDialogTemplate />;
}

export default QrCodeUserVoucher;

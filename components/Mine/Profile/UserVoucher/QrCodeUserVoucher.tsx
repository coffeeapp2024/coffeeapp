import React, { useEffect } from "react";
import { UserData, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import { toast } from "sonner";
import { isEqual } from "lodash";
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";
import { listenForKeyChangeInDoc } from "@/lib/firebaseUtils";

function QrCodeUserVoucher() {
  const { open, setOpen } = useQrCodeStore();
  const { userId, userData, setUserData } = useUserDataStore();

  useEffect(() => {
    if (userId && userData && open) {
      const unsubscribe = listenForKeyChangeInDoc(
        "users",
        userId,
        "voucherList",
        (voucherList) => {
          if (isEqual(voucherList, userData.voucherList)) {
            console.log("User voucherIdList remains unchanged");
            return;
          }

          const updatedUserData: UserData = {
            ...userData,
            voucherList: voucherList,
          };

          toast.success("Voucher has been successfully scanned!");
          setOpen(false);

          setTimeout(() => {
            setUserData(updatedUserData);
          }, 2000);

          return unsubscribe();
        }
      );
    }
  }, [open, userData, userId, setOpen, setUserData]);

  return <QrcodeDialogTemplate />;
}

export default QrCodeUserVoucher;

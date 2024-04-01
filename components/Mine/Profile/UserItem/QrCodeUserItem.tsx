import React, { useEffect } from "react";
import { useQrCodeStore, useUserDataStore } from "@/store/zustand";
import { toast } from "sonner";
import { UserData } from "@/store/storeTypes";
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";
import { listenForKeyChangeInDoc } from "@/lib/firebaseUtils";
import { isEqual } from "lodash";

function QrCodeUserItem() {
  const { open, setOpen } = useQrCodeStore();
  const { userId, userData, setUserData } = useUserDataStore();

  useEffect(() => {
    if (userId && userData && open) {
      const unsubscribe = listenForKeyChangeInDoc(
        "users",
        userId,
        "collection",
        (newCollection) => {
          if (isEqual(newCollection, userData.collection)) {
            console.log("User collection remains unchanged");
            return;
          }
          const updatedUserData: UserData = {
            ...userData,
            collection: newCollection,
          };

          setOpen(false);
          toast.success("Items has been successfully scanned!");
          setTimeout(() => {
            setUserData(updatedUserData);
          }, 2000);

          return unsubscribe();
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return <QrcodeDialogTemplate />;
}

export default QrCodeUserItem;

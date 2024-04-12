import React, { useEffect } from "react";
import { UserData, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import UserVoucherCard from "./UserVoucherCard";
import { toast } from "sonner";
import { listenForKeyChangeInDoc, listenToDocument } from "@/lib/firebaseUtils";
import { isEqual } from "lodash";
import { User } from "firebase/auth";

function UserVoucherCardList() {
  const { open, setOpen } = useQrCodeStore();
  const { userId, userData, setUserData } = useUserDataStore();

  const { voucherList } = userData ?? {};

  useEffect(() => {
    console.log("UserVoucherCardList effect is running");

    if (userId && userData && open) {
      const unsubscribe = listenToDocument(
        "users",
        userId,
        (data: UserData) => {
          if (isEqual(data.voucherList, userData.voucherList)) {
            console.log("User voucherList remains unchanged");
            return;
          }

          const updatedUserData: UserData = {
            ...userData,
            voucherList: data.voucherList,
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

    return () => {
      console.log("UserVoucherCardList effect is finished");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pb-20 flex flex-col gap-y-2">
      {voucherList?.map((voucher, index) => (
        <UserVoucherCard key={index} userVoucher={voucher} />
      ))}
    </div>
  );
}

export default UserVoucherCardList;

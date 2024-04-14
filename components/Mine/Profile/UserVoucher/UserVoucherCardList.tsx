import React, { useEffect } from "react";
import { UserData, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import UserVoucherCard from "./UserVoucherCard";
import { listenKeyChangeInDocument } from "@/lib/firebaseUtils";

function UserVoucherCardList() {
  const { setOpen } = useQrCodeStore();
  const { userId, userData, setUserData } = useUserDataStore();

  const { voucherList } = userData ?? {};

  useEffect(() => {
    if (!userId || !userData) return;

    const onDataChange = (data: UserData) => {
      const updatedUserData: UserData = {
        ...userData,
        voucherList: data.voucherList,
      };

      setOpen(false);
      setUserData(updatedUserData);
    };

    const unsubscribe = listenKeyChangeInDocument(
      "users",
      userId,
      userData,
      "voucherList",
      onDataChange
    );

    return unsubscribe;
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

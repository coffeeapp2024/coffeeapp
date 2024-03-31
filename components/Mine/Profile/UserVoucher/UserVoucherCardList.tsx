import React from "react";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherCard from "./UserVoucherCard";
import QrCodeUserVoucher from "./QrCodeUserVoucher";

function UserVoucherCardList() {
  const { userData } = useUserDataStore();

  const { voucherIdList } = userData ?? {};

  return (
    <>
      <div className="-ml-0 pb-20 flex flex-col gap-y-3">
        {voucherIdList?.map((voucherId, index) => (
          <UserVoucherCard key={index} index={index} voucherId={voucherId} />
        ))}
      </div>
      <QrCodeUserVoucher />
    </>
  );
}

export default UserVoucherCardList;

import React from "react";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherCard from "./UserVoucherCard";
import QrCodeUserVoucher from "./QrCodeUserVoucher";
import { Dialog } from "@radix-ui/react-dialog";

function UserVoucherCardList() {
  const { userData } = useUserDataStore();

  const { voucherIdList } = userData ?? {};

  return (
    <>
      <QrCodeUserVoucher />
      <div className="pt-4 pb-20 flex flex-col gap-y-2">
        {voucherIdList?.map((voucherId, index) => (
          <UserVoucherCard key={index} index={index} voucherId={voucherId} />
        ))}
      </div>
    </>
  );
}

export default UserVoucherCardList;

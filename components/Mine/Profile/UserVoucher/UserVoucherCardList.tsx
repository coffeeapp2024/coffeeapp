import React from "react";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherCard from "./UserVoucherCard";

function UserVoucherCardList() {
  const { userData } = useUserDataStore();

  const { voucherList } = userData ?? {};

  return (
    <div className="pb-20 flex flex-col gap-y-2">
      {voucherList?.map((voucher, index) => (
        <UserVoucherCard key={index} userVoucher={voucher} />
      ))}
    </div>
  );
}

export default UserVoucherCardList;

"use client";
import React from "react";
import VoucherCard from "@/components/Voucher/VoucherCard";
import { useUserDataStore, useVoucherStore } from "@/store/zustand";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";

function VoucherCardList() {
  const { userData, setUserData } = useUserDataStore();

  const { vouchers } = useVoucherStore();

  const handleBuy = async (voucherId: string, price: number) => {
    if (!userData) return;

    const updatedVouchers = [...(userData.voucherIdList || []), voucherId];

    await updateUserDataAfterPurchase(userData, price, setUserData, [
      {
        key: "voucherIdList",
        value: updatedVouchers,
      },
    ]);

    toast.success("Voucher purchased successfully!");
    return;
  };
  return (
    <div className="pt-8 flex flex-col items-center gap-y-3">
      {vouchers &&
        vouchers.map((voucherData, index) => (
          <VoucherCard
            key={index}
            voucherData={voucherData}
            isHidden={!userData}
            handleBuy={handleBuy}
          />
        ))}
    </div>
  );
}

export default VoucherCardList;

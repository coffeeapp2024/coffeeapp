"use client";

import React from "react";
import VoucherCardTemplate from "../Template/VoucherCardTemplate";
import { useUserDataStore } from "@/store/zustand";
import { updateUserDataAfterPurchase } from "@/lib/coinActions";
import { toast } from "sonner";

function VoucherCard({ voucherData, isHidden }: any) {
  const { imageURL, name, info, price, id } = voucherData;
  const { userData, setUserData } = useUserDataStore();

  const handleBuy = async (voucherId: string, price: number) => {
    if (!userData) return toast.error("Login to claim voucher");

    const updatedVouchers = [...(userData.voucherIdList || []), voucherId];

    await toast.promise(
      updateUserDataAfterPurchase(userData, setUserData, price, [
        {
          key: "voucherIdList",
          value: updatedVouchers,
        },
      ]),
      {
        loading: "Proccessing...",
        success: "Voucher purchased successfully",
        error: (error) => error.message,
      }
    );
  };
  return (
    <VoucherCardTemplate
      {...{ imageURL, name, info, price }}
      nameButton="Claim"
      onClick={() => handleBuy(id, price)}
    />
  );
}

export default VoucherCard;

"use client";
import React from "react";
import VoucherCard from "@/components/Voucher/VoucherCard";
import { useVoucherStore } from "@/store/zustand";

function VoucherCardList() {
  const { vouchers } = useVoucherStore();

  return (
    <div className="pt-8 flex flex-col items-center gap-y-2">
      {vouchers &&
        vouchers.map((voucherData, index) => (
          <VoucherCard key={index} voucherData={voucherData} />
        ))}
    </div>
  );
}

export default VoucherCardList;

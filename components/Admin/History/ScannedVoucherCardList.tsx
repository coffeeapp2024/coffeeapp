"use client";

import { useScannedVouchersStore } from "@/store/admin";
import React from "react";
import ScannedVoucherCard from "./ScannedVoucherCard";

function ScannedVoucherList() {
  const { scannedVouchers } = useScannedVouchersStore();

  return (
    <div className="flex flex-col gap-y-2">
      {scannedVouchers.map((scannedVoucher, index) => (
        <ScannedVoucherCard key={index} scannedVoucher={scannedVoucher} />
      ))}
    </div>
  );
}

export default ScannedVoucherList;

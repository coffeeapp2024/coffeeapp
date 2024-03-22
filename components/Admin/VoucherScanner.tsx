"use client";
import { deleteVoucherIdFromUser } from "@/lib/firebaseFunctions";
import QRCodeScanner from "../Template/QrCodeScanner";

import React, { useState } from "react";
import { toast } from "sonner";
import { useUserDataStore } from "@/store/zustand";

const VoucherScanner = () => {
  const { role } = useUserDataStore();

  const handleQrCode = async (text: string) => {
    const [userId, voucherId, indexStr] = text.split("-");
    const index = parseInt(indexStr);

    await deleteVoucherIdFromUser(userId, voucherId, index);

    toast.success("Voucher deleted successfully");
  };

  return (
    <div className={`${role ? "" : "pointer-events-none grayscale"}`}>
      <QRCodeScanner
        buttonName="Scan Me!"
        handleOnClick={() => {}}
        handleQrCode={handleQrCode}
      />
    </div>
  );
};

export default VoucherScanner;

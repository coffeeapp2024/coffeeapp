"use client";
import { deleteVoucherIdFromUser } from "@/lib/firebaseFunctions";
import QRCodeScanner from "../Template/QrCodeScanner";

import React, { useState } from "react";
import { toast } from "sonner";

const VoucherScanner = () => {
  const handleQrCode = async (text: string) => {
    const [userId, voucherId, indexStr] = text.split("-");
    const index = parseInt(indexStr);

    await deleteVoucherIdFromUser(userId, voucherId, index);

    toast.success("Voucher deleted successfully");
  };

  return (
    <QRCodeScanner
      buttonName="Scan Me!"
      handleOnClick={() => {}}
      handleQrCode={handleQrCode}
    />
  );
};

export default VoucherScanner;

"use client";
import QRCodeScanner from "../Template/QrCodeScanner";

import React, { useState } from "react";
import { toast } from "sonner";

const VoucherScanner = () => {
  const handleQrCode = async (text: string) => {};

  return (
    <QRCodeScanner
      buttonName="Scan Me!"
      handleOnClick={() => {}}
      handleQrCode={handleQrCode}
    />
  );
};

export default VoucherScanner;

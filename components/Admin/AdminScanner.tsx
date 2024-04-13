"use client";
import QRCodeScanner from "../Template/QrCodeScanner";
import React from "react";
import { useUserDataStore } from "@/store/zustand";
import { handleVoucherScan } from "@/adminLib/voucherActions";
import { handleProductScan } from "@/adminLib/productActions";

const AdminScanner = () => {
  const { role } = useUserDataStore();

  const handleQrCode = async (text: string) => {
    const [userId, arrayKey, id] = text.split("-");

    if (arrayKey === "voucherList") {
      await handleVoucherScan(userId, id);
    }
    if (arrayKey === "collection") {
      await handleProductScan(userId, id);
    }
  };

  return (
    <div className={`${role ? "" : "pointer-events-none grayscale"}`}>
      <QRCodeScanner buttonName="Scan Me!" handleQrCode={handleQrCode} />
    </div>
  );
};

export default AdminScanner;

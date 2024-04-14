"use client";
import QRCodeScanner from "../Template/QrCodeScanner";
import React from "react";
import { useUserDataStore } from "@/store/zustand";
import { handleVoucherScan } from "@/adminLib/voucherActions";
import { handleProductScan } from "@/adminLib/productActions";
import { useOrderItemsStore, useScannedVouchersStore } from "@/store/admin";

const AdminScanner = () => {
  const { role } = useUserDataStore();
  const { orderItems, setOrderItems } = useOrderItemsStore();
  const { scannedVouchers, setScannedVouchers } = useScannedVouchersStore();

  const handleQrCode = async (text: string) => {
    const [userId, arrayKey, id] = text.split("-");

    if (arrayKey === "voucherList") {
      await handleVoucherScan(scannedVouchers, setScannedVouchers, userId, id);
    }
    if (arrayKey === "collection") {
      await handleProductScan(orderItems, setOrderItems, userId, id);
    }
  };

  return (
    <div className={`${role ? "" : "pointer-events-none grayscale"}`}>
      <QRCodeScanner buttonName="Scan Me!" handleQrCode={handleQrCode} />
    </div>
  );
};

export default AdminScanner;

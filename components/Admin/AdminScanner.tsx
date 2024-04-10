"use client";
import QRCodeScanner from "../Template/QrCodeScanner";

import React from "react";
import { toast } from "sonner";
import { useUserDataStore } from "@/store/zustand";
import { deleteItemFromDocumentArrayByIndex } from "@/lib/firebaseUtils";

const AdminScanner = () => {
  const { role } = useUserDataStore();

  const handleQrCode = async (text: string) => {
    const [userId, arrayKey, indexStr] = text.split("-");
    const index = parseInt(indexStr);

    await deleteItemFromDocumentArrayByIndex("users", userId, arrayKey, index);

    if (arrayKey === "voucherIdList")
      toast.success("Voucher deleted successfully from the database.");
    if (arrayKey === "collection")
      toast.success("Product deleted successfully from the database.");
  };

  return (
    <div className={`${role ? "" : "pointer-events-none grayscale"}`}>
      <QRCodeScanner buttonName="Scan Me!" handleQrCode={handleQrCode} />
    </div>
  );
};

export default AdminScanner;

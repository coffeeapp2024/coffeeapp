"use client";
import QRCodeScanner from "../Template/QrCodeScanner";

import React from "react";
import { toast } from "sonner";
import { useUserDataStore } from "@/store/zustand";
import { removeVoucher } from "@/lib/voucherUtils";
import {
  addDocumentsToCollection,
  deleteKeyInDocument,
  getKeyValue,
  updateKeyInDocument,
} from "@/lib/firebaseUtils";
import { generateUniqueId } from "@/lib/utils";

const AdminScanner = () => {
  const { role } = useUserDataStore();

  const handleQrCode = async (text: string) => {
    const [userId, arrayKey, id] = text.split("-");

    if (arrayKey === "voucherList") {
      const userVoucherList = await getKeyValue("users", userId, "voucherList");
      const updatedVoucherList = await removeVoucher(userVoucherList, id);
      await updateKeyInDocument(
        "users",
        userId,
        "voucherList",
        updatedVoucherList
      );

      await addDocumentsToCollection("scannedList", [
        {
          id: generateUniqueId(),
          voucherId: id,
          userId: userId,
          scannedAt: new Date().toISOString(),
        },
      ]);

      toast.success("Voucher deleted successfully from the database.");
    }
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

"use client";

import React from "react";
import {
  fetchKeysFromFirestore,
  deleteKeyFromFirestore,
  updateUserInFirestore,
} from "@/lib/firebaseFunctions";
import { useUserDataStore } from "@/store/zustand";
import { updateMineTimes } from "@/lib/coinActions";
import { toast } from "sonner";
import QRCodeScanner from "../Template/QrCodeScanner";

const ClaimCoinScanner = () => {
  const { userData, userId, setUserData } = useUserDataStore();

  const handleQrCode = async (text: string) => {
    const keys = await fetchKeysFromFirestore(); // Fetch keys from Firestore
    if (keys.includes(text)) {
      if (!userId || !userData) {
        return;
      }
      const newUserData = await updateMineTimes(userData, 24);
      if (!newUserData) {
        return;
      }
      setUserData(newUserData);
      await updateUserInFirestore(userId, newUserData);
      await deleteKeyFromFirestore(text);

      toast.success("QR Code scanned successfully  +24h");
    } else {
      toast.error("Invalid QR Code. Please try again.");
    }
  };

  return (
    <QRCodeScanner
      buttonName="Scan QR"
      handleOnClick={() => {
        !userData && toast.warning("Sign in to scan QR Code");
      }}
      handleQrCode={handleQrCode}
    />
  );
};

export default ClaimCoinScanner;

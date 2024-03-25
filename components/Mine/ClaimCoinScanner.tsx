"use client";

import React from "react";
import {
  fetchKeysFromFirestore,
  deleteKeyFromFirestore,
  updateUserInFirestore,
} from "@/lib/firebaseFunctions";
import { useLevelStore, useUserDataStore } from "@/store/zustand";
import { updateMineTimes } from "@/lib/coinActions";
import { toast } from "sonner";
import QRCodeScanner from "../Template/QrCodeScanner";

const ClaimCoinScanner = () => {
  const { userData, userId, setUserData } = useUserDataStore();
  const { levels } = useLevelStore();

  const handleQrCode = async (text: string) => {
    if (!userId || !userData) {
      toast.warning("Sign in to scan QR Code");
      return;
    }

    if (!userData?.level) {
      toast.warning("User level not found");
      return;
    }

    if (!levels) {
      return;
    }

    const userTimeMinePerQr = levels[userData?.level - 1].timeMinePerQr;

    const keys = await fetchKeysFromFirestore(); // Fetch keys from Firestore
    if (keys.includes(text)) {
      const newUserData = await updateMineTimes(userData, userTimeMinePerQr);
      if (!newUserData) {
        return;
      }
      setUserData(newUserData);
      await updateUserInFirestore(userId, newUserData);
      await deleteKeyFromFirestore(text);

      toast.success(`QR Code scanned successfully! +${userTimeMinePerQr}h`);
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

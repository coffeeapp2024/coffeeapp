"use client";

import React from "react";
import { updateUserInFirestore } from "@/lib/firebaseFunctions";
import { useUserDataStore } from "@/store/zustand";
import { toast } from "sonner";
import QRCodeScanner from "../Template/QrCodeScanner";
import { deleteDocumentByKey, fetchCollectionData } from "@/lib/firebaseUtils";
import { QrCodeType, UserData } from "@/store/storeTypes";
import { calculateEndTimeMine } from "@/lib/timeActions";

const ClaimCoinScanner = () => {
  const { userData, userId, setUserData } = useUserDataStore();

  const handleQrCode = async (text: string) => {
    if (!userId || !userData || !userData.fillTime) {
      toast.warning("Sign in to scan QR Code");
      return;
    }
    if (!userData.fillTime) {
      toast.warning("Fill time is null");
      return;
    }

    const keys = (await fetchCollectionData("keys")) as QrCodeType[];

    if (keys.some((key) => key.key === text)) {
      const now = new Date();
      const newEndTimeMine = calculateEndTimeMine(now, userData.fillTime);

      const newUserData: UserData = {
        ...userData,
        startTimeMine: now.toISOString(),
        endTimeMine: newEndTimeMine,
        inStorage: {
          balance: 0,
          timeAt: now.toISOString(),
        },
      };

      setUserData(newUserData);
      await updateUserInFirestore(userId, newUserData);

      await deleteDocumentByKey("keys", "key", text);

      toast.success("QR Code scanned successfully!");
    } else {
      toast.error("Invalid QR Code. Please try again.");
    }
  };

  return (
    <QRCodeScanner
      buttonName="Claim MIN"
      className="!px-3 !text-lg"
      handleQrCode={handleQrCode}
    />
  );
};

export default ClaimCoinScanner;

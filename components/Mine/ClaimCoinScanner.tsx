"use client";

import React from "react";
import { updateUserInFirestore } from "@/lib/firebaseFunctions";
import { useStorageStore, useUserDataStore } from "@/store/zustand";
import {
  findUserMiningHourPerQrCode,
  updateMineTimes,
} from "@/lib/coinActions";
import { toast } from "sonner";
import QRCodeScanner from "../Template/QrCodeScanner";
import { deleteDocumentByKey, fetchCollectionData } from "@/lib/firebaseUtils";
import { QrCodeType } from "@/store/storeTypes";

const ClaimCoinScanner = () => {
  const { userData, userId, setUserData } = useUserDataStore();
  const { storages } = useStorageStore();

  const handleQrCode = async (text: string) => {
    if (!userId || !userData) {
      toast.warning("Sign in to scan QR Code");
      return;
    }

    if (!userData?.miningHourPerQrCodeLevel) {
      toast.warning("User miningHourPerQrCodeLevel not found");
      return;
    }

    if (!storages) {
      toast.warning("Storages not found");
      return;
    }

    const userMiningHourPerQrCode = findUserMiningHourPerQrCode(
      storages,
      userData?.miningHourPerQrCodeLevel
    );

    if (!userMiningHourPerQrCode) {
      toast.warning("userMiningHourPerQrCode not found");
      return;
    }

    const keys = (await fetchCollectionData("keys")) as QrCodeType[];

    if (keys.some((key) => key.key === text)) {
      const newUserData = await updateMineTimes(
        userData,
        userMiningHourPerQrCode
      );
      if (!newUserData) {
        return;
      }
      setUserData(newUserData);
      await updateUserInFirestore(userId, newUserData);
      await deleteDocumentByKey("keys", "key", text);

      toast.success(
        `QR Code scanned successfully! +${userMiningHourPerQrCode}h`
      );
    } else {
      toast.error("Invalid QR Code. Please try again.");
    }
  };

  return (
    <QRCodeScanner
      buttonName="Claim MIN"
      handleOnClick={() => {
        !userData && toast.warning("Sign in to scan QR Code");
      }}
      handleQrCode={handleQrCode}
    />
  );
};

export default ClaimCoinScanner;

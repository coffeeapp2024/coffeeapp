"use client";

import React, { useState, useRef } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MainButton from "../MainButton";
import {
  fetchKeysFromFirestore,
  deleteKeyFromFirestore,
  updateUserInFirestore,
} from "@/lib/firebaseFunctions";
import jsQR from "jsqr";
import { useUserDataStore } from "@/store/zustand";
import { updateMineTimes } from "@/lib/coinActions";
import { scanQRCodeFromFile } from "@/lib/scanQRCodeFromFile";
import { toast } from "sonner";

const ClaimCoinScanner = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { userData, userId, setUserData } = useUserDataStore();

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = async (text: string) => {
    if (!userData) {
      toast.warning("Sign in to scan QR Code");
      return;
    }

    setScannedText(text);
    setShowScanner(false);

    try {
      const keys = await fetchKeysFromFirestore(); // Fetch keys from Firestore
      if (keys.includes(text)) {
        if (!userId || !userData) {
          return;
        }
        const newUserData = await updateMineTimes(userData, 24);

        setUserData(newUserData);
        await updateUserInFirestore(userId, newUserData);
        await deleteKeyFromFirestore(text);
        toast.success("QR Code scanned successfully");
      } else {
        toast.error("Invalid QR Code. Please try again.");
      }
    } catch (error) {
      toast.error("Error handling scan QR Code. Please try again.");
      console.error("Error handling scan result:", error);
    }
  };

  const handleError = (error: Error) => {
    console.error("Scanner error:", error?.message);
    toast.error(error?.message);

    setShowScanner(false);
  };

  const handleImageUpload = async () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const scannedText = await scanQRCodeFromFile(file);
      if (scannedText) {
        handleResult(scannedText);
      } else {
        toast.error("Not found QR code in the image. Please try again.");
      }
    } catch (error) {
      console.error("Error scanning QR code:", error);
    }
  };

  return (
    <Dialog open={showScanner} onOpenChange={toggleScanner}>
      <DialogTrigger
        onClick={() => {
          !userData && toast.warning("Sign in to scan QR Code");
        }}
      >
        <MainButton text="Scan QR" />
      </DialogTrigger>
      <DialogContent>
        <Scanner
          onResult={handleResult}
          onError={handleError}
          enabled={showScanner}
          components={{ tracker: true }}
        />
        <button className="file-upload-button" onClick={handleImageUpload}>
          Upload Image
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ClaimCoinScanner;

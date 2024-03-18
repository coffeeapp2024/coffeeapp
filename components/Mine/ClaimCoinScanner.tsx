"use client";

import React, { useState, useRef } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MainButton from "../MainButton";
import {
  fetchKeysFromFirestore,
  deleteKeyFromFirestore,
} from "@/lib/firebaseFunctions";
import jsQR from "jsqr";
import { useUserDataStore } from "@/store/zustand";
import { updateMineTimes } from "@/lib/coinActions";

const QRCodeScanner = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { userId, setUserData } = useUserDataStore();

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = async (text: string) => {
    setShowScanner(false);

    try {
      const keys = await fetchKeysFromFirestore(); // Fetch keys from Firestore
      if (keys.includes(text)) {
        if (!userId) {
          return;
        }
        const fetchedUserData = await updateMineTimes(userId, 24);

        setUserData(fetchedUserData);
        // If the scanned text matches a key, delete the key
        await deleteKeyFromFirestore(text);
        console.log("Key deleted successfully:", text);
      } else {
        console.log("Scanned text is not a valid key.");
      }
    } catch (error) {
      console.error("Error handling scan result:", error);
    }
  };

  const handleError = (error: Error) => {
    console.error("Scanner error:", error?.message);
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

    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target) {
        const image = new Image();
        image.src = e.target.result?.toString() || "";
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
          if (!context) return;

          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0, image.width, image.height);

          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );

          const qrCode = jsQR(
            imageData.data,
            imageData.width,
            imageData.height
          );
          if (qrCode) {
            setScannedText(qrCode.data);
            handleResult(qrCode.data);
          } else {
            console.log("No QR code found in the image.");
          }
        };
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <Dialog open={showScanner} onOpenChange={toggleScanner}>
      <DialogTrigger>
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
        {scannedText && <p>Scanned QR Code: {scannedText}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeScanner;

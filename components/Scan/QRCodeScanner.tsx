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
import { scanQRCodeFromFile } from "@/lib/scanQRCodeFromFile";

const QRCodeScanner = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = async (text: string) => {
    setScannedText(scannedText);
    setShowScanner(false);

    try {
      const keys = await fetchKeysFromFirestore(); // Fetch keys from Firestore
      if (keys.includes(text)) {
        // If the scanned text matches a key, delete the key
        await deleteKeyFromFirestore(text);
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

    try {
      const scannedText = await scanQRCodeFromFile(file);
      if (scannedText) {
        handleResult(scannedText);
      } else {
        console.log("No QR code found in the image.");
      }
    } catch (error) {
      console.error("Error scanning QR code:", error);
    }
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

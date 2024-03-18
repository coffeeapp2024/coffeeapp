"use client";

import React, { useId, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MainButton from "./MainButton";
import { useUserDataStore } from "@/store/zustand";
import { updateMineTimes } from "@/lib/coinActions";
import { fetchUserData } from "@/lib/firebaseFunctions";

const QRScannerButton: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);
  const { userId, setUserData } = useUserDataStore();

  const toggleScanner = async () => {
    if (!userId) {
      return;
    }
    const fetchedUserData = await updateMineTimes(userId, 24);

    setUserData(fetchedUserData);

    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = (text: string, result: any) => {
    setScannedText(text);
    setShowScanner(false);
  };

  const handleError = (error: Error) => {
    console.error("Scanner error:", error?.message);
    setShowScanner(false); // Hide scanner if an error occurs
  };
  return (
    <Dialog open={false} onOpenChange={toggleScanner}>
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
        {scannedText && (
          <div>
            <p>Scanned Text: {scannedText}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default QRScannerButton;

"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MainButton from "../MainButton";
import {
  fetchKeysFromFirestore,
  deleteKeyFromFirestore,
} from "@/lib/firebaseFunctions";

const QRCodeScanner = () => {
  const [showScanner, setShowScanner] = useState(false);

  const toggleScanner = async () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = async (text: string, result: any) => {
    setShowScanner(false);

    try {
      const keys = await fetchKeysFromFirestore(); // Fetch keys from Firestore
      if (keys.includes(text)) {
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
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeScanner;

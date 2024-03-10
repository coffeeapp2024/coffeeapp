"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const QRScannerButton: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = (text: string, result: any) => {
    setScannedText(result);
    setShowScanner(false); // Hide scanner after successful scan
  };

  const handleError = (error: Error) => {
    console.error("Scanner error:", error?.message);
    setShowScanner(false); // Hide scanner if an error occurs
  };
  return (
    <Dialog>
      <DialogTrigger className="bg-yellow-500 h-12 w-fit px-4 flex items-center justify-center rounded-2xl text-xl text-neutral-800 font-extrabold text-nowrap border-[1px] border-neutral-700">
        Scan Bill
      </DialogTrigger>
      <DialogContent>
        <Scanner onResult={handleResult} onError={handleError} />
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

"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const QRScannerButton: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = (text: string, result: any) => {
    setScannedText(text);
    setShowScanner(false); // Hide scanner after successful scan
  };

  const handleError = (error: Error) => {
    console.error("Scanner error:", error?.message);
    setShowScanner(false); // Hide scanner if an error occurs
  };
  return (
    <Dialog open={false} onOpenChange={toggleScanner}>
      <DialogTrigger className="relative z-10 active:scale-[98%]">
        <div className="bg-yellow-400 h-10 px-4 flex items-center justify-center rounded-xl text-xl text-neutral-800 font-bold text-nowrap border-[1px] border-neutral-800 -z-10">
          Scan Bill
          <div className="absolute w-full h-full -z-20 top-[3px] left-[3px] rounded-xl bg-neutral-700 "></div>
        </div>
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

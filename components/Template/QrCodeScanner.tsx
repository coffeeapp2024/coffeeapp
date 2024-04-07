"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import MainButton from "../MainButton";
import { toast } from "sonner";
import UploadQRCodeButton from "../Template/UploadQRCodeButton";

const QRCodeScanner = ({
  handleQrCode,
  handleOnClick,
  buttonName,
  className,
}: {
  handleQrCode: (text: string) => Promise<void>;
  handleOnClick: any;
  buttonName: string;
  className?: string;
}) => {
  const [showScanner, setShowScanner] = useState(false);
  const [scannedText, setScannedText] = useState<string | null>(null);

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  const handleResult = async (text: string) => {
    setScannedText(text);
    setShowScanner(false);

    try {
      await handleQrCode(text);
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

  return (
    <Dialog open={showScanner} onOpenChange={toggleScanner}>
      <DialogTrigger onClick={handleOnClick}>
        <MainButton className={className} text={buttonName} />
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none px-4 z-50">
        <div className="relative rounded-3xl border-[3px] border-red-800 overflow-hidden">
          <div className="overflow-hidden">
            <Scanner
              onResult={handleResult}
              onError={handleError}
              enabled={showScanner}
              components={{ tracker: true }}
            />
          </div>
        </div>
        <UploadQRCodeButton handleResult={handleResult} />
      </DialogContent>
    </Dialog>
  );
};

export default QRCodeScanner;

"use client";
import { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { generateKeysAndSaveToFirestore } from "@/lib/firebaseFunctions";
import MainButton from "../MainButton";
import { useUserDataStore } from "@/store/zustand";
import { QrCodeType } from "@/store/storeTypes";

function GenerateQrCodeButton() {
  const { role } = useUserDataStore();
  const [qrCodes, setQrCodes] = useState<QrCodeType[]>([]);

  useEffect(() => {
    if (qrCodes.length > 0) {
      qrCodes.forEach((qrValue, index) => {
        const canvas = document.getElementById(
          `qr-code-${index}`
        ) as HTMLCanvasElement | null;
        if (canvas) {
          const pngUrl = canvas.toDataURL(); // Default format is PNG
          const downloadLink = document.createElement("a");
          downloadLink.href = pngUrl;
          downloadLink.download = `qr-code.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      });
    }
  }, [qrCodes]);

  const handleGenerateAndDownload = async () => {
    try {
      const Qrcodes = await generateKeysAndSaveToFirestore(1); // Generate 1 key
      setQrCodes(Qrcodes);

      console.log("Qrcodes", qrCodes);
    } catch (error) {
      console.error("Error generating Qrcodes:", error);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="hidden">
        {qrCodes.map((qrCode, index) => (
          <div key={index}>
            <QRCode
              id={`qr-code-${index}`}
              value={qrCode.key}
              includeMargin={true}
            />
          </div>
        ))}
      </div>
      <button
        className={`${
          role === "manager" ? "" : "pointer-events-none grayscale"
        }`}
        onClick={handleGenerateAndDownload}
      >
        <MainButton text="Create QR" />
      </button>
    </div>
  );
}

export default GenerateQrCodeButton;

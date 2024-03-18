"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { generateKeysAndSaveToFirestore } from "@/lib/firebaseFunctions";

function GenerateQrCodeButton() {
  const [qrValues, setQrValues] = useState<string[]>([]);

  useEffect(() => {
    generateAndSetKeys();
  }, []);

  const generateAndSetKeys = async () => {
    try {
      const keys = await generateKeysAndSaveToFirestore(2); // Generate 2 keys
      setQrValues(keys);
    } catch (error) {
      console.error("Error generating keys:", error);
    }
  };

  const handleDownload = () => {
    qrValues.forEach((qrValue, index) => {
      const canvas = document.getElementById(
        `qr-code-${index}`
      ) as HTMLCanvasElement | null;
      if (canvas) {
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `qr-code-${index}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    });
  };

  return (
    <div>
      <div className="hidden">
        {qrValues.map((qrValue, index) => (
          <div key={index}>
            <QRCode id={`qr-code-${index}`} value={qrValue} />
          </div>
        ))}
      </div>
      <button className="text-black w-4 h-4 border-2" onClick={handleDownload}>
        Download QR Codes
      </button>
    </div>
  );
}

export default GenerateQrCodeButton;

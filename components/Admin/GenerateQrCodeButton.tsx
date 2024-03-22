"use client";
import { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { generateKeysAndSaveToFirestore } from "@/lib/firebaseFunctions";
import MainButton from "../Template/MainButton";

function GenerateQrCodeButton() {
  const [qrValues, setQrValues] = useState<string[]>([]);

  useEffect(() => {
    if (qrValues.length > 0) {
      qrValues.forEach((qrValue, index) => {
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
  }, [qrValues]);

  const handleGenerateAndDownload = async () => {
    try {
      const keys = await generateKeysAndSaveToFirestore(1); // Generate 1 key
      setQrValues(keys);
    } catch (error) {
      console.error("Error generating keys:", error);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="hidden">
        {qrValues.map((qrValue, index) => (
          <div key={index}>
            <QRCode
              id={`qr-code-${index}`}
              value={qrValue}
              includeMargin={true}
            />
          </div>
        ))}
      </div>
      <button onClick={handleGenerateAndDownload}>
        <MainButton text="Create QR" />
      </button>
    </div>
  );
}

export default GenerateQrCodeButton;

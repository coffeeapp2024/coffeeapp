"use client";
import { useState } from "react";
import QRCode from "qrcode.react";
import { generateKeysAndSaveToFirestore } from "@/lib/firebaseFunctions";

function GenerateQrCodeButton() {
  const [qrValues, setQrValues] = useState<string[]>(["xinchaotraidat"]);

  const handleGenerateAndDownload = async () => {
    try {
      const keys = await generateKeysAndSaveToFirestore(1); // Generate 1 key
      setQrValues(keys);

      qrValues.forEach((qrValue, index) => {
        const canvas = document.getElementById(
          `qr-code-${index}`
        ) as HTMLCanvasElement | null;
        if (canvas) {
          const pngUrl = canvas.toDataURL(); // Default format is PNG
          const downloadLink = document.createElement("a");
          downloadLink.href = pngUrl;
          downloadLink.download = `qr-code-${index}.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      });
    } catch (error) {
      console.error("Error generating keys:", error);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="">
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
      <button
        className="text-white bg-neutral-900"
        onClick={handleGenerateAndDownload}
      >
        Generate QR Code
      </button>
    </div>
  );
}

export default GenerateQrCodeButton;

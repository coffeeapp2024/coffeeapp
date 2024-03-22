import { scanQRCodeFromFile } from "@/lib/scanQRCodeFromFile";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import { toast } from "sonner";

function UploadQRCodeButton({
  handleResult,
}: {
  handleResult: (text: string) => Promise<void>;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        toast.error("Not found QR code in the image. Please try again.");
      }
    } catch (error) {
      console.error("Error scanning QR code:", error);
    }
  };

  const handleImageUpload = async () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <button
        className="absolute bg-neutral-900 p-2 rounded-full -bottom-16 left-1/2 -translate-x-1/2"
        onClick={handleImageUpload}
      >
        <ArrowUpTrayIcon className="text-white w-5 h-5" />
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
    </>
  );
}

export default UploadQRCodeButton;

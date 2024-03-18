import GenerateQrCodeButton from "@/components/Scan/GenerateQrCodeButton";
import React from "react";

function page() {
  return (
    <div className="bg-white h-screen max-w-screen-sm flex items-center justify-center">
      <GenerateQrCodeButton />
    </div>
  );
}

export default page;

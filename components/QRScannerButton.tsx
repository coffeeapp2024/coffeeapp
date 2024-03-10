"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import React from "react";

function QRScannerButton() {
  return (
    <Scanner
      onResult={(text, result) => console.log(text, result)}
      onError={(error) => console.log(error?.message)}
    />
  );
}

export default QRScannerButton;

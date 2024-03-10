"use client";

import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

const QRScannerButton: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [text, setText] = useState("");

  const toggleScanner = () => {
    setShowScanner((prevShowScanner) => !prevShowScanner);
  };

  return (
    <div>
      <button
        className=" bg-yellow-500 h-12 w-fit px-4 flex items-center justify-center rounded-2xl text-xl text-neutral-800 font-extrabold text-nowrap border-[1px] border-neutral-700"
        onClick={toggleScanner}
      >
        {showScanner ? "Close" : "Scan Bill"}
        {text}
      </button>
      {showScanner && (
        <Scanner
          onResult={(text, result) => setText(text)}
          onError={(error) => console.log(error?.message)}
        />
      )}
    </div>
  );
};

export default QRScannerButton;

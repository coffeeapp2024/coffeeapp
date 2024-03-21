"use client";

import React, { useRef, ChangeEvent } from "react";

interface Props {
  onFileSelect: (file: File) => void;
}

function UploadImageButton({ onFileSelect }: Props) {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
      />
      <button
        className="bg-neutral-800 w-full text-white font-semibold mx-4 rounded-3xl px-3 py-3 flex items-center justify-center"
        onClick={handleButtonClick}
      >
        Upload Your Image
      </button>
    </div>
  );
}

export default UploadImageButton;

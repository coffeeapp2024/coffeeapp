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
    <div className="w-full flex items-center justify-center">
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
      <button
        className="bg-neutral-800 w-full text-sm text-white font-semibold mx-6 rounded-3xl px-3 py-2 flex items-center justify-center"
        onClick={handleButtonClick}
      >
        Upload Your Image
      </button>
    </div>
  );
}

export default UploadImageButton;

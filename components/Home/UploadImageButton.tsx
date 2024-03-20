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
      <button onClick={handleButtonClick}>Upload Image</button>
    </div>
  );
}

export default UploadImageButton;

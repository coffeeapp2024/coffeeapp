import Image from "next/image";
import React from "react";

function GalleryImage({ imageURL }: { imageURL: string }) {
  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden">
      <Image src={imageURL} fill={true} alt="about image" />
    </div>
  );
}

export default GalleryImage;

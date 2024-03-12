import Image from "next/image";
import React from "react";

function AboutImage({ img_url }: { img_url: string }) {
  return (
    <div className="relative aspect-square rounded-3xl overflow-hidden">
      <Image src={img_url} fill={true} alt="about image" />
    </div>
  );
}

export default AboutImage;

import Image from "next/image";
import React from "react";

function BannerProductPage() {
  return (
    <div className="p-2 mb-8">
      <div className="aspect-[3/1] relative rounded-3xl overflow-hidden shadow-sm">
        <Image
          src="/cover.jpg"
          fill={true}
          sizes="(max-width: 640px) 100vw, 640px"
          alt="cover"
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default BannerProductPage;

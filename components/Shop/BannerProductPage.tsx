"use client";

import { useShopStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";

function BannerProductPage() {
  const { banner } = useShopStore();

  return (
    <div className="p-2 mb-8">
      <div className="aspect-[3/1] relative rounded-3xl overflow-hidden shadow-sm">
        {banner ? (
          <Image
            src={banner}
            alt="banner shop"
            width={500}
            height={300}
            className="object-cover"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default BannerProductPage;

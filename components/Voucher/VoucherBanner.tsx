"use client";

import { useVoucherPageContentStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";

function VoucherBanner() {
  const { voucherPageContent } = useVoucherPageContentStore();

  const { bannerURL } = voucherPageContent ?? {};

  return (
    <div className="bg-background w-full aspect-[3/1] rounded-2xl overflow-hidden">
      {bannerURL && (
        <Image
          src={bannerURL}
          width={600}
          height={200}
          className="w-full h-full object-cover"
          alt="Banner Voucher Page"
        />
      )}
    </div>
  );
}

export default VoucherBanner;

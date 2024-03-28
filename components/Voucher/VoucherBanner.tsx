"use client";

import { useVoucherPageContentStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";

function VoucherBanner() {
  const { voucherPageContent } = useVoucherPageContentStore();

  const { voucherBannerURL } = voucherPageContent ?? {};

  return (
    <div className="w-full min-h-screen bg-background p-0 px-3 pt-2">
      <div className="bg-neutral-200 w-full aspect-[3/1] rounded-2xl overflow-hidden">
        {voucherBannerURL && (
          <Image
            src={voucherBannerURL}
            width={600}
            height={200}
            className="w-full h-full object-cover"
            alt="Banner Voucher Page"
          />
        )}
      </div>
    </div>
  );
}

export default VoucherBanner;

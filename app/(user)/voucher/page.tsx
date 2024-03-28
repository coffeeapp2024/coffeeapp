import React from "react";
import VoucherCardList from "@/components/Voucher/VoucherCardList";
import VoucherBanner from "@/components/Voucher/VoucherBanner";

function page() {
  return (
    <div className="w-full min-h-screen bg-background p-0 px-3 pt-2">
      <VoucherBanner />
      <VoucherCardList />
    </div>
  );
}

export default page;

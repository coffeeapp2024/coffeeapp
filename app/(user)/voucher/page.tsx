import React from "react";
import VoucherCardList from "@/components/Voucher/VoucherCardList";
import VoucherBanner from "@/components/Voucher/VoucherBanner";

function page() {
  return (
    <div>
      <VoucherBanner />
      <VoucherCardList />
    </div>
  );
}

export default page;

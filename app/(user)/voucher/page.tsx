import React from "react";
import VoucherCardList from "@/components/Voucher/VoucherCardList";
import VoucherBanner from "@/components/Voucher/VoucherBanner";

function page() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/cb/5c/5a/cb5c5a0ce2599d078ebd545d4bbe1a5c.jpg")',
      }}
      className="w-full min-h-screen bg-background p-0 px-3 pt-2"
    >
      <VoucherBanner />
      <VoucherCardList />
    </div>
  );
}

export default page;

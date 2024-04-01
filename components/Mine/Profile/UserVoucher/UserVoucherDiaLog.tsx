import React from "react";
import UserVoucherCardList from "./UserVoucherCardList";
import Image from "next/image";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import QrCodeUserVoucher from "./QrCodeUserVoucher";

function UserVoucherDiaLog() {
  return (
    <Sheet>
      <SheetTrigger className="relative w-full h-full bg-purple-300 px-2 py-1 flex">
        <div className="h-2/3 w-full">
          <Image
            src="/icons/voucher.png"
            width={200}
            height={200}
            alt="Voucher Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full px-2 pb-2">
          <div className="rounded-[20px] h-12 font-semibold bg-white flex items-center justify-center">
            Vouchers
          </div>
        </div>
      </SheetTrigger>
      <SheetContentLayout backgroundImage="/bg/bg3.jpg" className="px-2 pt-20">
        <QrCodeUserVoucher />
        <UserVoucherCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default UserVoucherDiaLog;

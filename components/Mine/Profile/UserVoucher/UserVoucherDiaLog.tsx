import React from "react";
import UserVoucherCardList from "./UserVoucherCardList";
import Image from "next/image";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import QrCodeUserVoucher from "./QrCodeUserVoucher";
import UserCardTemplate from "@/components/Template/UserCardTemplate";

function UserVoucherDiaLog() {
  return (
    <Sheet>
      <UserCardTemplate imageURL="/icons/voucher.png" name="Vouchers" />
      <SheetContentLayout backgroundImage="/bg/bg3.jpg" className="px-2 pt-20">
        <QrCodeUserVoucher />
        <UserVoucherCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default UserVoucherDiaLog;

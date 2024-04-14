import React from "react";
import UserVoucherCardList from "./UserVoucherCardList";
import { Sheet } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import UserCardTemplate from "@/components/Template/UserCardTemplate";
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";

function UserVoucherDiaLog() {
  return (
    <Sheet>
      <UserCardTemplate
        imageURL="/icons/voucher.png"
        name="Vouchers"
        className="-mr-2"
      />
      <SheetContentLayout
        backgroundImage="/bg/main-bg.jpg"
        className="px-2 pt-20"
      >
        <QrcodeDialogTemplate />
        <UserVoucherCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default UserVoucherDiaLog;

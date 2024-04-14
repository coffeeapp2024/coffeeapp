import React from "react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SheetContentLayout from "../ui/SheetContentLayout";
import MainButton from "../MainButton";
import ScannedVoucherList from "./History/ScannedVoucherCardList";

function ScannedVoucherDialog() {
  return (
    <Sheet>
      <SheetTrigger>
        <MainButton text="Vouchers" />
      </SheetTrigger>
      <SheetContentLayout className="pt-20 bg-neutral-50">
        <ScannedVoucherList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default ScannedVoucherDialog;

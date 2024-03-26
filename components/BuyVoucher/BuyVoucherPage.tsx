import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import BuyVoucherCard from "./BuyVoucherCard";

const VoucherDataList = [
  {
    name: "giảm ",
  },
];

function BuyVoucherPage() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-primary-dark">open buy voucher</button>
      </SheetTrigger>

      <SheetContent className="w-full bg-background p-0 px-3">
        {/* Nav template */}
        <div className="fixed w-full h-12 bg-card flex items-center justify-start">
          {/* Close template */}
          <SheetClose asChild>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </SheetClose>
        </div>
        {/* List Voucher Card */}
        <div className="pt-28">
          <BuyVoucherCard />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BuyVoucherPage;

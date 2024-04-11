import React from "react";
import HistoryIcon from "../Icon/HistoryIcon";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SheetContentLayout from "../ui/SheetContentLayout";
import HistoryCardList from "./History/HistoryCardList";

function HistoryDialog() {
  return (
    <Sheet>
      <SheetTrigger className="p-2 flex items-center justify-center rounded-full border-2px border-foreground">
        <HistoryIcon className="w-6 h-6" />
      </SheetTrigger>
      <SheetContentLayout className="pt-20 bg-neutral-50">
        <HistoryCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default HistoryDialog;

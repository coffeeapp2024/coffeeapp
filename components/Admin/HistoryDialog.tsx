import React from "react";
import HistoryIcon from "../Icon/HistoryIcon";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SheetContentLayout from "../ui/SheetContentLayout";
import HistoryCardList from "./History/HistoryCardList";
import MainButton from "../MainButton";

function HistoryDialog() {
  return (
    <Sheet>
      <SheetTrigger>
        <MainButton text="Order List" />
      </SheetTrigger>
      <SheetContentLayout className="pt-20 bg-neutral-50">
        <HistoryCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default HistoryDialog;

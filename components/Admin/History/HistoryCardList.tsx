"use client";

import React from "react";
import HistoryCard from "./HistoryCard";
import { useOrderItemsStore } from "@/store/admin";

function HistoryCardList() {
  const { orderItems } = useOrderItemsStore();
  console.log(orderItems);

  return (
    <div className="flex flex-col gap-y-2">
      {orderItems.map((orderItem, index) => (
        <HistoryCard key={index} orderItem={orderItem} />
      ))}
    </div>
  );
}

export default HistoryCardList;

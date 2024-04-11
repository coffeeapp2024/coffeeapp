import React from "react";
import HistoryCard from "./HistoryCard";

function HistoryCardList() {
  return (
    <div className="flex flex-col gap-y-2">
      {Array.from({ length: 2 }, (_, index) => (
        <HistoryCard key={index} />
      ))}
    </div>
  );
}

export default HistoryCardList;

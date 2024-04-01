import { useUserDataStore } from "@/store/zustand";
import React from "react";
import UserItemCard from "./UserItemCard";

function UserItemCardList() {
  const { userData } = useUserDataStore();

  const { collection } = userData ?? {};

  return (
    <div className="flex flex-col items-center gap-y-3">
      {collection &&
        collection.map((item, index) => (
          <UserItemCard key={index} item={item} index={index} />
        ))}
    </div>
  );
}

export default UserItemCardList;

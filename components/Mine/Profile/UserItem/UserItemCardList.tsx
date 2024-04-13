"use client";
import { UserData, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import React, { useEffect } from "react";
import UserItemCard from "./UserItemCard";
import { listenKeyChangeInDocument } from "@/lib/firebaseUtils";

function UserItemCardList() {
  const { setOpen } = useQrCodeStore();
  const { userId, userData, setUserData } = useUserDataStore();
  const { collection } = userData ?? {};

  useEffect(() => {
    if (!userId || !userData) return;

    const onDataChange = (data: UserData) => {
      const updatedUserData: UserData = {
        ...userData,
        collection: data.collection,
      };

      setOpen(false);
      setUserData(updatedUserData);
    };

    listenKeyChangeInDocument(
      "users",
      userId,
      userData,
      "collection",
      onDataChange
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  return (
    <div className="flex flex-col items-center gap-y-3">
      {collection &&
        collection.map((item, index) => (
          <UserItemCard key={index} item={item} />
        ))}
    </div>
  );
}

export default UserItemCardList;

"use client";
import { UserData, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import React, { useEffect } from "react";
import UserItemCard from "./UserProductCard";
import { listenKeyChangeInDocument } from "@/lib/firebaseUtils";

function UserProductCardList() {
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

    const unsubscribe = listenKeyChangeInDocument(
      "users",
      userId,
      userData,
      "collection",
      onDataChange
    );

    return unsubscribe;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2">
      {collection &&
        collection.map((item, index) => (
          <UserItemCard key={index} item={item} />
        ))}
    </div>
  );
}

export default UserProductCardList;

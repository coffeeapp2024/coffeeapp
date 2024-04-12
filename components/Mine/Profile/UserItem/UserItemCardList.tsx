"use client";
import { UserData, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import React, { useEffect } from "react";
import UserItemCard from "./UserItemCard";
import { listenToDocument } from "@/lib/firebaseUtils";
import { isEqual } from "lodash";
import { toast } from "sonner";

function UserItemCardList() {
  const { setOpen } = useQrCodeStore();
  const { userId, userData, setUserData } = useUserDataStore();
  const { collection } = userData ?? {};

  useEffect(() => {
    if (!userId || !userData) return;

    const unsubscribe = listenToDocument("users", userId, (data: UserData) => {
      if (isEqual(data.collection, userData.collection)) return;

      const updatedUserData: UserData = {
        ...userData,
        collection: data.collection,
      };

      toast.success("Product has been successfully scanned!");
      setOpen(false);

      setTimeout(() => {
        setUserData(updatedUserData);
      }, 2000);

      return unsubscribe();
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

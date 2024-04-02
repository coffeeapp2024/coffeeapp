import React from "react";
import Image from "next/image";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import UserItemCardList from "./UserItemCardList";
import QrCodeUserItem from "./QrCodeUserItem";
import UserCardTemplate from "@/components/Template/UserCardTemplate";

function UserItemDialog() {
  return (
    <Sheet>
      <UserCardTemplate
        imageURL="/icons/collection.png"
        name="Collection"
        className="-mt-1"
      />
      <SheetContentLayout backgroundImage="/bg/bg3.jpg" className="px-2 pt-20">
        <QrCodeUserItem />
        <UserItemCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default UserItemDialog;

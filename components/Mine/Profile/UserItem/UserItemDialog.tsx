import React from "react";
import Image from "next/image";
import { Sheet } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import UserItemCardList from "./UserItemCardList";
import UserCardTemplate from "@/components/Template/UserCardTemplate";
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";

function UserItemDialog() {
  return (
    <Sheet>
      <UserCardTemplate
        imageURL="/icons/collection.png"
        name="Collection"
        className="-mt-1"
      />
      <SheetContentLayout backgroundImage="/bg/bg3.jpg" className="px-2 pt-20">
        <QrcodeDialogTemplate />
        <UserItemCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default UserItemDialog;

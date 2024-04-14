import React from "react";
import { Sheet } from "@/components/ui/sheet";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import UserItemCardList from "./UserProductCardList";
import UserCardTemplate from "@/components/Template/UserCardTemplate";
import QrcodeDialogTemplate from "@/components/Template/QrcodeDialogTemplate";

function UserProductDialog() {
  return (
    <Sheet>
      <UserCardTemplate
        imageURL="/icons/collection.png"
        name="Collection"
        className="-mt-1"
      />
      <SheetContentLayout
        backgroundImage="/bg/main-bg.jpg"
        className="px-2 pt-20"
      >
        <QrcodeDialogTemplate />
        <UserItemCardList />
      </SheetContentLayout>
    </Sheet>
  );
}

export default UserProductDialog;

import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import UserVoucherCardList from "./UserVoucherCardList";

function UserVoucherDiaLog() {
  return (
    <Drawer>
      <DrawerTrigger className="bg-white bg-opacity-95 w-full h-full">
        Open
      </DrawerTrigger>
      <DrawerContent className="h-[90%] bg-background px-2 pt-1">
        <UserVoucherCardList />
      </DrawerContent>
    </Drawer>
  );
}

export default UserVoucherDiaLog;

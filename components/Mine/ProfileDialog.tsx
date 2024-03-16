import {
  ChevronRightIcon,
  FireIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import UserSection from "./UserSection";

function ProfileDialog() {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-between w-full h-full p-3">
        <div className="flex items-center justify-center gap-x-2 h-full">
          <div className="bg-neutral-300 rounded-xl h-full aspect-square flex items-center justify-center">
            <UserCircleIcon className="h-6 w-6 text-neutral-700" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-neutral-800">
              Anh Phan
            </span>
            <div className="flex items-center justify-center gap-x-1">
              <FireIcon className="h-3 w-3 text-yellow-600" />
              <span className="text-sm font-extrabold">7.375708</span>
            </div>
          </div>
        </div>
        <ChevronRightIcon className="h-6 w-6" />
      </DrawerTrigger>
      <DrawerContent className="h-2/3 w-full rounded-t-3xl">
        <UserSection />
      </DrawerContent>
    </Drawer>
  );
}

export default ProfileDialog;

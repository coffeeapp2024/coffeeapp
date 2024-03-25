import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import UserInfo from "./UserInfo";
import UserVoucherList from "./UserVoucherList";
import { User } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import Admin from "./AdminNav";
import { useUserDataStore } from "@/store/zustand";
import UserPageNav from "./UserPageNav";
import {
  ArrowLeftIcon,
  Bars2Icon,
  ChevronLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

function ProfileDialog({ user }: { user: User }) {
  const { role } = useUserDataStore();
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <UserPageNav user={user} />
      </SheetTrigger>

      <SheetContent className="w-full px-2 pt-3 h-full sm:max-w-screen-sm mx-auto bg-neutral-100">
        <div className="flex justify-between items-center">
          <SheetClose asChild>
            <button className="w-10 h-10 flex items-center justify-center bg-neutral-200 rounded-xl">
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
          </SheetClose>
          <div className="font-semibold text-lg text-neutral-900">
            MIN Wallet
          </div>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-neutral-200 ">
            <EllipsisVerticalIcon className="w-4 h-4" />
          </button>
        </div>
        {role && <Admin />}
        <SignOutButton />
      </SheetContent>
    </Sheet>
  );
}

export default ProfileDialog;

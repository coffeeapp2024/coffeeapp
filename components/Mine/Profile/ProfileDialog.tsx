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

      <SheetContent className="w-full p-0 h-full sm:max-w-screen-sm mx-auto bg-orange-50">
        <div className="fixed w-full flex justify-between items-center bg-white px-1 py-2">
          <SheetClose asChild>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl">
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
          </SheetClose>
          <div className="font-semibold text-lg text-neutral-900">
            MIN Wallet
          </div>
          <button className="w-10 h-10 rounded-xl flex items-center justify-center bg-white ">
            <EllipsisVerticalIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="px-4">
          <div></div>
          <div className="relative">
            <div className="flex items-center justify-center h-40 w-full bg-white mt-28 rounded-[26px] z-10 border-neutral-800 border-[1px]">
              <p>Coming Soon Poster/App</p>
              <div className="bg-neutral-950 absolute top-1 left-1 w-full h-full rounded-[26px] -z-10"></div>
            </div>
          </div>
        </div>

        <div>
          <div></div>
        </div>

        {role && <Admin />}
        {/* <SignOutButton /> */}
      </SheetContent>
    </Sheet>
  );
}

export default ProfileDialog;

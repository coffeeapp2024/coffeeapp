import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import UserInfo from "./UserInfo";
import UserVoucherList from "./UserVoucherList";
import { User } from "firebase/auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";

function ProfileDialog({ user }: { user: User }) {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-between w-full h-full p-3">
        <div className="flex items-center justify-center gap-x-2 h-full">
          <div className="relative overflow-hidden bg-neutral-300 rounded-xl h-full aspect-square flex items-center justify-center">
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                fill={true}
                sizes="(max-width: 640px) 100vw, 640px"
                alt="User Avatar"
                className="object-cover"
              />
            ) : (
              <UserCircleIcon className="h-6 w-6 text-neutral-700" />
            )}
          </div>
          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold text-neutral-800">
              {user ? user.displayName : "Loading..."}
            </span>
            <span className="text-sm font-semibold text-neutral-600">
              {user ? user.email : "Loading..."}
            </span>
          </div>
        </div>
        <ChevronRightIcon className="h-6 w-6" />
      </DrawerTrigger>

      {/* User Content ------------------------------------- */}
      <DrawerContent className="rounded-t-3xl h-[70vh] sm:max-w-screen-sm mx-auto">
        <div className="pt-6">
          <UserInfo user={user} />
          <UserVoucherList />
        </div>
        <SignOutButton />
      </DrawerContent>
    </Drawer>
  );
}

export default ProfileDialog;

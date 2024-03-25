"use client";

import { ChevronRightIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { User } from "firebase/auth";
import Image from "next/image";
import React from "react";

function UserPageNav({ user }: { user: User }) {
  return (
    <div className="flex items-center justify-between w-full h-full p-3">
      <div className="flex items-center justify-center gap-x-2 h-full">
        <div className="overflow-hidden bg-neutral-300 rounded-xl w-12 aspect-square flex items-center justify-center">
          {user.photoURL ? (
            <Image
              src={user.photoURL}
              width={100}
              height={100}
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
    </div>
  );
}

export default UserPageNav;

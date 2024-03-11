import {
  ChevronRightIcon,
  FireIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function ProfileInfo() {
  return (
    <Link href="/user">
      <div className="user-card">
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
      </div>
    </Link>
  );
}

export default ProfileInfo;

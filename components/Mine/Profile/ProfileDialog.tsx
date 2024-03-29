import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { User } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import Admin from "./AdminNav";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherDiaLog from "./UserVoucher/UserVoucherDiaLog";
import ProfileTrigger from "./ProfileTrigger";
import SheetContentLayout from "@/components/ui/SheetContentLayout";

function ProfileDialog({ user }: { user: User }) {
  const { role } = useUserDataStore();

  const styleCard =
    "bg-neutral-50 aspect-[5/6] rounded-3xl flex items-center justify-center shadow-sm border-1px  border-neutral-200";
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <ProfileTrigger user={user} />
      </SheetTrigger>
      <SheetContentLayout>
        <div className="grid grid-cols-2 gap-4">
          <div className={`${styleCard}`}>
            <UserVoucherDiaLog />
          </div>
          {Array.from({ length: 4 }, (_, index) => (
            <div key={index} className={`${styleCard}`}>
              <span className="text-neutral-400">Coming Soon</span>
            </div>
          ))}
        </div>
        {role && <Admin />}
        <SignOutButton />
      </SheetContentLayout>
    </Sheet>
  );
}

export default ProfileDialog;

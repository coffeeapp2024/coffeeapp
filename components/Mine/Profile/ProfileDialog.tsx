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
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <ProfileTrigger user={user} />
      </SheetTrigger>
      <SheetContentLayout>
        <div className="grid grid-cols-2">
          <div className="bg-white aspect-square rounded-3xl flex items-center justify-center shadow-sm border-1px">
            <UserVoucherDiaLog />
          </div>
        </div>
        {role && <Admin />}
        <SignOutButton />
      </SheetContentLayout>
    </Sheet>
  );
}

export default ProfileDialog;

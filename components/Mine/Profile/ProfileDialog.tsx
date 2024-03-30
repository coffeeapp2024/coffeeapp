import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { User } from "firebase/auth";
import SignOutButton from "./SignOutButton";
import Admin from "./AdminNav";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherDiaLog from "./UserVoucher/UserVoucherDiaLog";
import ProfileTrigger from "./ProfileTrigger";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import ProfileCard from "./ProfileCard";

function ProfileDialog({ user }: { user: User }) {
  const { role } = useUserDataStore();

  const styleCard =
    "bg-neutral-50 aspect-square rounded-3xl flex items-center justify-center shadow-sm border-1px  border-neutral-200";
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <ProfileTrigger user={user} />
      </SheetTrigger>
      <SheetContentLayout>
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 aspect-square rounded-full bg-neutral-300 mb-5"></div>
          <h3 className="font-bold text-2xl">Tri Minh Nguyen</h3>
          <p>trimindev@gmail.com</p>
        </div>
        <div className="border-neutral-100 border-1px -mx-4 my-6"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className={`${styleCard}`}>
            <UserVoucherDiaLog />
          </div>
          {Array.from({ length: 2 }, (_, index) => (
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

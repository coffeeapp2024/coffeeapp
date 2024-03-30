import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { User } from "firebase/auth";
import { useUserDataStore } from "@/store/zustand";
import UserVoucherDiaLog from "./UserVoucher/UserVoucherDiaLog";
import ProfileTrigger from "./ProfileTrigger";
import SheetContentLayout from "@/components/ui/SheetContentLayout";
import Image from "next/image";
import SettingPopup from "./SettingPopup";
import AdminNav from "./AdminNav";

function ProfileDialog({ user }: { user: User }) {
  const { role } = useUserDataStore();

  const { displayName, photoURL, email, phoneNumber } = user;

  const styleCard =
    "bg-background aspect-square rounded-3xl flex items-center justify-center shadow-sm border-1px  border-neutral-200 overflow-hidden";
  return (
    <Sheet>
      <SheetTrigger className="w-full">
        <ProfileTrigger user={user} />
      </SheetTrigger>
      <SheetContentLayout className="">
        {/* Profile Info */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-24 aspect-square rounded-full bg-neutral-300 mb-5">
            {photoURL && (
              <Image
                src={photoURL}
                width={300}
                height={300}
                className="rounded-full"
                alt="Avatar"
              />
            )}
          </div>
          <h3 className="font-bold text-2xl">
            {displayName ? displayName : "Loading..."}
          </h3>
          <p>{email ? email : "Loading..."}</p>
        </div>
        <div className="border-white border-opacity-80 border-1px -mx-4 my-6"></div>
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
        <SettingPopup />
        {role && <AdminNav />}
      </SheetContentLayout>
    </Sheet>
  );
}

export default ProfileDialog;

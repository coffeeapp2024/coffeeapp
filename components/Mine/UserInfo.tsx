import Image from "next/image";
import React from "react";
import SignOutButton from "./SignOutButton";
import { User } from "firebase/auth";

function UserInfo({ user }: { user: User }) {
  return (
    <div className="flex items-center justify-center flex-col mb-14">
      <div className="relative rounded-full overflow-hidden w-20 h-20 mb-2">
        {user.photoURL ? (
          <Image src={user.photoURL} fill={true} alt="user avatar" />
        ) : (
          ""
        )}
      </div>
      <h3 className="font-bold text-2xl text-neutral-900">
        {user ? user.displayName : "Loading..."}
      </h3>
      <span className="font-semibold text-neutral-700">
        {user ? user.email : "Loading..."}
      </span>
      <SignOutButton />
    </div>
  );
}

export default UserInfo;

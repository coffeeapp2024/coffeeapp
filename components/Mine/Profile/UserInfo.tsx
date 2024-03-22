import Image from "next/image";
import React from "react";
import { User } from "firebase/auth";

function UserInfo({ user }: { user: User }) {
  return (
    <div className="relative flex items-center justify-center flex-col mb-24">
      <div className="w-24 h-24 mb-2">
        {user.photoURL && (
          <Image
            src={user.photoURL}
            width={300}
            height={300}
            className="rounded-full"
            alt="Avatar"
          />
        )}
      </div>
      <h3 className="font-bold text-2xl text-neutral-900">
        {user ? user.displayName : "Loading..."}
      </h3>
      <span className="font-semibold text-neutral-700">
        {user ? user.email : "Loading..."}
      </span>
    </div>
  );
}

export default UserInfo;

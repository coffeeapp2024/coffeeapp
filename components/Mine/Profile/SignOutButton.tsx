"use client";

import React from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useUserDataStore } from "@/store/zustand";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

function SignOutButton() {
  const { setUserData } = useUserDataStore();

  async function signOutUser() {
    await signOut(auth);
    setUserData(null);
  }

  return (
    <button
      className="flex items-center justify-center gap-x-1 rounded-xl font-medium text-neutral-400 absolute top-4 right-2 p-2"
      onClick={signOutUser}
    >
      <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
    </button>
  );
}

export default SignOutButton;

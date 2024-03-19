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
      className="px-3 py-2 flex items-center justify-center gap-x-1 rounded-2xl font-medium text-neutral-400 absolute bottom-3 left-1/2 -translate-x-1/2"
      onClick={signOutUser}
    >
      <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
      Log out
    </button>
  );
}

export default SignOutButton;

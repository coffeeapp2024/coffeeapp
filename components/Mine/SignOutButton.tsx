"use client";

import React from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function SignOutButton() {
  const router = useRouter();

  async function signOutUser() {
    await signOut(auth);
    router.push("/");
  }

  return (
    <button className="absolute right-3 top-6" onClick={signOutUser}>
      <ArrowRightStartOnRectangleIcon className="w-7 h-7" />
    </button>
  );
}

export default SignOutButton;

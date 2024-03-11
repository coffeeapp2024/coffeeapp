"use client";

import React from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

function SignOutButton() {
  const router = useRouter();
  async function signOutUser() {
    try {
      // Sign out with the Firebase client
      await signOut(auth);

      // Clear the cookies on the server
      const response = await fetch(`/api/signOut`, {
        method: "POST",
      });

      if (response.status === 200) {
        router.push("/");
      } else {
        throw new Error("Failed to sign out.");
      }
    } catch (error) {
      console.error("Sign out error:", error);
    }
  }

  return (
    <button className="bg-yellow-300" onClick={signOutUser}>
      Sign Out
    </button>
  );
}

export default SignOutButton;

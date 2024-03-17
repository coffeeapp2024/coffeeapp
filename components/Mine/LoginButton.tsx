"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import Image from "next/image";
import { createUserInFirestore, fetchUserData } from "@/lib/firebaseFunctions";
import { useUserDataStore } from "@/store/zustand";

export default function LoginButton() {
  const { setUserData } = useUserDataStore();

  async function signIn() {
    try {
      const { user } = await signInWithPopup(auth, provider);
      let fetchedUserData = await createUserInFirestore(user);
      if (!fetchedUserData) {
        fetchedUserData = await fetchUserData(user.uid);
      }
      setUserData(fetchedUserData);
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  }

  return (
    <button
      className="flex items-center justify-center w-full h-full p-3 gap-x-3"
      onClick={() => signIn()}
    >
      <div className="w-10 h-10 relative">
        <Image src="/google-icon.png" fill={true} alt="Google Icon" />
      </div>
      <p className="font-semibold text-lg text-neutral-900">
        Sign in with Google
      </p>
    </button>
  );
}

"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import Image from "next/image";
import { createUserInFirestore } from "@/lib/firebaseFunctions";
import { useUserDataStore } from "@/store/zustand";
import { getDocumentById } from "@/lib/firebaseUtils";
import { UserData } from "@/store/zustand";

export default function LoginButton() {
  const { setUserData, setUserId } = useUserDataStore();

  async function signIn() {
    try {
      const { user } = await signInWithPopup(auth, provider);
      let fetchedUserData = await createUserInFirestore(user);
      if (!fetchedUserData) {
        fetchedUserData = (await getDocumentById(
          "users",
          user.uid
        )) as UserData;
      }
      setUserData(fetchedUserData);
      setUserId(user.uid);
    } catch (error) {
      console.error("Error signing in:", error);
      throw error;
    }
  }

  return (
    <button
      className="flex items-center justify-center w-full h-full p-3 gap-x-3 bg-white rounded-3xl"
      onClick={() => signIn()}
    >
      <div className="w-10 h-10 relative">
        <Image src="/icons/google-icon.png" fill={true} alt="Google Icon" />
      </div>
      <p className="font-semibold text-lg text-neutral-900">
        Sign in with Google
      </p>
    </button>
  );
}

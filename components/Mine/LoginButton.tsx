"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import Image from "next/image";
import { createUserInFirestore } from "@/lib/firebaseFunctions";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  async function signIn() {
    const { user } = await signInWithPopup(auth, provider);
    await createUserInFirestore(user);
    router.push("/");
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

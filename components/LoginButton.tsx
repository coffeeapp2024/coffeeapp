"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  async function signIn() {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result?.user.getIdToken();

    await fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    router.push("/");
  }

  return (
    <button className="user-card" onClick={() => signIn()}>
      <div>Sign In</div>
    </button>
  );
}

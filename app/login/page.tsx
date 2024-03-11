"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../lib/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  async function signIn() {
    const result = await signInWithPopup(auth, provider);

    console.log("result:", result);

    const idToken = await result?.user.getIdToken();

    await fetch("/api/login", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    router.push("/user");
  }

  return (
    <div className="text-black bg-white h-screen">
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}

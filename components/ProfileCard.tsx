"use client";

import ProfileInfo from "./ProfileInfo";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import Link from "next/link";
import LoginButton from "./LoginButton";

function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Set up an observer for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update the user state when authentication state changes
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []); // Only run this effect once when the component mounts

  console.log("user:", user);

  return (
    <div className="mx-3 h-16 bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300">
      {user ? <ProfileInfo /> : <LoginButton />}
    </div>
  );
}

export default ProfileCard;

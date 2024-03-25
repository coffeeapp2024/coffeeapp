"use client";

import ProfileDialog from "./ProfileDialog";
import LoginButton from "./LoginButton";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";

function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="mx-3 bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 shadow-sm active:scale-[98%] transition-transform">
      {user ? <ProfileDialog user={user} /> : <LoginButton />}
    </div>
  );
}

export default ProfileCard;

"use client";

import ProfileDialog from "./ProfileDialog";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";
import LoginButton from "./LoginButton";

function ProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="mx-3 h-16 bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 shadow-sm active:scale-[98%] transition-transform">
      {user ? <ProfileDialog user={user} /> : <LoginButton />}
      {/* <ProfileDialog /> */}
    </div>
  );
}

export default ProfileCard;

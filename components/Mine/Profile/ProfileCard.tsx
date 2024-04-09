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
    <div className="mx-3 bg-background bg-opacity-content1 rounded-3xl shadow-sm active:scale-[98%] transition-transform">
      {user ? <ProfileDialog user={user} /> : <LoginButton />}
    </div>
  );
}

export default ProfileCard;

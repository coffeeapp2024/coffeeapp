"use client";

import Claim from "@/components/Claim";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/ScanClaimCard";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import Background from "@/components/Mine/Background";
import { UserData } from "@/lib/types";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in, fetch additional user data
        const firestore = getFirestore();
        const userDoc = doc(firestore, "users", user.uid);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          // User data exists, set it to state
          setUserData(userSnapshot.data() as UserData);
        } else {
          // User data not found
          console.error("User data not found");
        }
      } else {
        // User is signed out
        setUserData(null);
      }
    });
  }, []);

  console.log("user data:", userData);

  return (
    <main className="relative h-screen">
      <Background />
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <Claim coin={userData?.coin} balance={userData?.balance} />
      <ScanClaimCard />
    </main>
  );
}

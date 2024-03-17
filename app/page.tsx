"use client";

import Claim from "@/components/Mine/Claim";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import Background from "@/components/Mine/Background";
import { UserData } from "@/lib/types";
import { createUserInFirestore, fetchUserData } from "@/lib/firebaseFunctions";
import {} from "@/lib/timeActions";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const fetchedUserData = await fetchUserData(user.uid);
          console.log("hi ");
          setUserData(fetchedUserData);
        } catch (error) {
          console.error("Error fetching or creating user data:", error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  console.log("user data:", userData);

  const { coin, balance, endTimeMine } = userData ?? {};

  return (
    <main className="relative h-screen">
      <Background />
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <Claim coin={coin} balance={balance} endTimeMine={endTimeMine} />
      <ScanClaimCard endTimeMine={endTimeMine} balance={balance} />
    </main>
  );
}

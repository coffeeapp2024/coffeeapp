"use client";

import Claim from "@/components/Claim";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/ScanClaimCard";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import Background from "@/components/Mine/Background";
import { UserData } from "@/lib/types";
import { fetchUserData } from "@/lib/firebaseFunctions";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const fetchedUserData = await fetchUserData(user.uid);
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

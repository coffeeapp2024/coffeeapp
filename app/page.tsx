"use client";

import Claim from "@/components/Mine/Claim";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import Background from "@/components/Mine/Background";
import { fetchUserData } from "@/lib/firebaseFunctions";
import {} from "@/lib/timeActions";
import { useUserDataStore } from "@/store/zustand";

export default function Home() {
  const { setUserData } = useUserDataStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const fetchedUserData = await fetchUserData(user.uid);
          setUserData(fetchedUserData);
          console.log("set done");
        } catch (error) {
          console.error("Error fetching or creating user data:", error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, [setUserData]);

  return (
    <main className="relative h-screen">
      <Background />
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <Claim />
      <ScanClaimCard />
    </main>
  );
}

"use client";

import CurrentCoinInfo from "@/components/Mine/CurrentCoinInfo";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import { useEffect } from "react";
import { auth } from "@/lib/firebase";
import Background from "@/components/Mine/Background";
import { fetchUserData } from "@/lib/firebaseFunctions";
import {} from "@/lib/timeActions";
import { useUserDataStore } from "@/store/zustand";

export default function Home() {
  const { userData, setUserData, setUserId } = useUserDataStore();

  useEffect(() => {
    if (userData === null) {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        if (user) {
          try {
            console.log("rerender page");
            const fetchedUserData = await fetchUserData(user.uid);
            setUserData(fetchedUserData);
            setUserId(user.uid);
          } catch (error) {
            console.error("Error fetching or creating user data:", error);
          }
        } else {
          setUserData(null);
        }
      });

      return () => unsubscribe();
    }
  }, [userData, setUserData, setUserId]);

  return (
    <main className="relative h-screen max-w-screen-sm">
      <Background />
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <CurrentCoinInfo />
      <ScanClaimCard />
    </main>
  );
}

"use client";

import Claim from "@/components/Mine/Claim";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import Background from "@/components/Mine/Background";
import { UserData } from "@/lib/types";
import { fetchUserData } from "@/lib/firebaseFunctions";
import {
  calculateRemainingTimeInSeconds,
  formatSeconds,
} from "@/lib/timeActions";

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [remainingTimeSeconds, setRemainingTimeSeconds] = useState<
    number | null
  >(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const fetchedUserData = await fetchUserData(user.uid);
          setUserData(fetchedUserData);

          // Calculate remaining time in seconds
          const remainingTime = calculateRemainingTimeInSeconds(
            fetchedUserData?.endTimeMine
          );
          setRemainingTimeSeconds(remainingTime);
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

  const remainingTimeFormatted =
    remainingTimeSeconds != null ? formatSeconds(remainingTimeSeconds) : "";

  return (
    <main className="relative h-screen">
      <Background />
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <Claim coin={userData?.coin} balance={userData?.balance} />
      <ScanClaimCard
        remainingTime={remainingTimeFormatted}
        balance={userData?.balance}
      />
    </main>
  );
}

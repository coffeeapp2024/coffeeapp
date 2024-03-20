"use client";

import CurrentCoinInfo from "@/components/Mine/CurrentCoinInfo";
import ProfileCard from "@/components/Mine/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import Background from "@/components/Mine/Background";
import {} from "@/lib/timeActions";

export default function Home() {
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

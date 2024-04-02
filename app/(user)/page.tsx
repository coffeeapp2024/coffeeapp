"use client";

import CurrentCoinInfo from "@/components/Mine/CurrentCoinInfo";
import ProfileCard from "@/components/Mine/Profile/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import Background from "@/components/Mine/Background";
import {} from "@/lib/timeActions";
import AddToHomeScreen from "@/components/Mine/AddToHomeScreen";
import InstallButton from "@/components/Mine/InstallButton";
import Tiktok from "@/components/Mine/Tiktok";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url("/bg/mine-bg.jpg")`,
        backgroundSize: "cover",
      }}
      className="relative h-screen max-w-screen-sm z-10"
    >
      <AddToHomeScreen />
      <InstallButton />
      {/* <Background /> */}
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <CurrentCoinInfo />
      <ScanClaimCard />
      <Tiktok />
    </main>
  );
}

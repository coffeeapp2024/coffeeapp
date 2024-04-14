"use client";

import CurrentCoinInfo from "@/components/Mine/CurrentCoinInfo";
import ProfileCard from "@/components/Mine/Profile/ProfileCard";
import ScanClaimCard from "@/components/Mine/ScanClaimCard";
import {} from "@/lib/timeActions";
import AddToHomeScreen from "@/components/Mine/AddToHomeScreen";
import InstallButton from "@/components/Mine/InstallButton";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/564x/d7/54/41/d754412fc2198e9500561b15697c9e99.jpg")',
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
      {/* <Tiktok /> */}
    </main>
  );
}

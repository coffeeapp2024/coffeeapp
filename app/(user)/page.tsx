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
        backgroundImage: `url("https://i.pinimg.com/564x/ac/25/b2/ac25b2fa2d18bd53fecd1856fef5376b.jpg")`,
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

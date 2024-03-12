"use client";

import Claim from "@/components/Claim";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import ProfileCard from "@/components/ProfileCard";
import ScanClaimCard from "@/components/ScanClaimCard";
import { useEffect, useState } from "react";

const bgList = [
  ["/bg/bg1.jpg", "white"],
  ["/bg/bg7.jpg", "neutral-800"],
  ["/bg/bg6.jpg", "white"],
  ["/bg/bg5.jpg", "neutral-800"],
];

export default function Home() {
  const [bg, setBg] = useState(bgList[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bgList.length);
      setBg(bgList[randomIndex]);
    }, 10000); // Change background every 1 minute (60000 milliseconds)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url(${bg[0]})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative h-screen"
    >
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      {/* <Logo textColor={bg[1]} /> */}
      <Claim textColor={bg[1]} />
      <ScanClaimCard />
    </main>
  );
}

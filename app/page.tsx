import Claim from "@/components/Claim";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import ProfileCard from "@/components/ProfileCard";
import ScanClaimCard from "@/components/ScanClaimCard";

export default async function Home() {
  return (
    <main className="bg-gradient-to-b from-emerald-100 to-fuchsia-100 relative h-screen">
      <div className="pt-4 pb-20">
        <ProfileCard />
      </div>
      <Logo />
      <Claim />
      <ScanClaimCard />
      <Nav />
    </main>
  );
}

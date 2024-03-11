import Claim from "@/components/Claim";
import Nav from "@/components/Nav";

export default async function Home() {
  return (
    <main className="bg-pink-100 h-screen">
      <Claim />
      <Nav />
    </main>
  );
}

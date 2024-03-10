import Claim from "@/components/Claim";
import Nav from "@/components/Nav";
import { auth } from "../auth";

export default async function Home() {
  // const session = await auth();

  return (
    <main className="bg-pink-100 h-screen">
      <Claim session={"session"} />
      <Nav />
    </main>
  );
}

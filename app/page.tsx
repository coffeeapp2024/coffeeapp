import Claim from "@/components/Claim";
import Nav from "@/components/Nav";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type HomeProps = {
  pageProps: {
    session: Session | null;
  };
};

// export default function Home({ pageProps: { session } }: HomeProps) {
export default function Home() {
  return (
    // <SessionProvider session={session}>
    <main className="bg-pink-100 h-screen">
      <Claim />

      <Nav />
    </main>
    // </SessionProvider>
  );
}

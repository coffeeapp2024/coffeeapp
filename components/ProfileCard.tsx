import { signIn, signOut } from "@/auth";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

function ProfileCard({ session }: any) {
  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <div>
      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={() => handleSignIn("google")}>
            Sign in with Google
          </button>
        </>
      )} */}

      {true && (
        <form
          action={async () => {
            "use server";
            // await signOut({
            //   redirectTo: "https://localhost:3000/",
            //   redirect: true,
            // });

            await signIn("google");
          }}
        >
          Signed in as {session.user?.email} <br />
          <button>Sign out</button>
        </form>
      )}
    </div>
  );
}

export default ProfileCard;

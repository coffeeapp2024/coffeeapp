// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";

function ProfileCard() {
  // const { data: session } = useSession();

  return (
    <div>
      {/* {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn("google")}>Sign in with Google</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )} */}
    </div>
  );
}

export default ProfileCard;

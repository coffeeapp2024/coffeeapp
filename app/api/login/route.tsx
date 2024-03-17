import { auth, firestore } from "firebase-admin";
import { customInitApp } from "@/lib/firebase-admin-config";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { UserData } from "@/lib/types";

customInitApp();

export async function POST(request: NextRequest, response: NextResponse) {
  const authorization = headers().get("Authorization");
  if (authorization?.startsWith("Bearer ")) {
    const idToken = authorization.split("Bearer ")[1];
    const decodedToken = await auth().verifyIdToken(idToken);

    if (decodedToken) {
      // Generate session cookie
      const expiresIn = 60 * 60 * 24 * 5 * 1000;
      const sessionCookie = await auth().createSessionCookie(idToken, {
        expiresIn,
      });
      const options = {
        name: "session",
        value: sessionCookie,
        maxAge: expiresIn,
        httpOnly: true,
        secure: true,
      };

      // Add the cookie to the browser
      cookies().set(options);

      // Create data for the user
      try {
        const userId = decodedToken.uid;
        const userData = {
          email: decodedToken.email,
          displayName: decodedToken.name,
          coin: 9.888888,
          balance: 0.1,
          lastTimeStartMine: undefined,
          endTimeMine: undefined,
          vouchers: undefined,
        };

        // Save user data to Firestore
        await firestore().collection("users").doc(userId).set(userData);
      } catch (error) {
        console.error("Error creating user data:", error);
        return NextResponse.json(
          { message: "Error creating user data" },
          { status: 500 }
        );
      }
    }
  }

  return NextResponse.json({}, { status: 200 });
}

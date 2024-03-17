import {
  onSnapshot,
  doc,
  DocumentData,
  collection,
  setDoc,
  getDoc,
  deleteDoc,
  DocumentSnapshot,
} from "firebase/firestore";
import { UserData } from "./types";
import { User } from "firebase/auth";
import { db } from "./firebase";

const usersRef = collection(db, "users");

export async function createUserInFirestore(
  user: User
): Promise<UserData | null> {
  const userDoc = doc(usersRef, user.uid);

  try {
    const userSnapshot = await getDoc(userDoc);

    if (!userSnapshot.exists() && user.email && user.displayName) {
      const userData: UserData = {
        email: user.email,
        displayName: user.displayName,
        coin: 9.888888,
        balance: 0.1,
        lastTimeStartMine: "2024-03-17T17:00:00",
        endTimeMine: "2024-03-18T08:00:00",
        vouchers: [],
      };

      await setDoc(userDoc, userData);
      return userData;
    } else {
      console.error("User data already exists or user data is incomplete");
      return null;
    }
  } catch (error) {
    console.error("Error creating user data:", error);
    throw error; // Handle the error appropriately in your application
  }
}

export async function fetchUserData(userId: string): Promise<UserData | null> {
  const userDoc = doc(usersRef, userId);

  return new Promise<UserData | null>((resolve, reject) => {
    const unsubscribe = onSnapshot(
      userDoc,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data() as UserData;
          resolve(userData);
        } else {
          console.error("User data not found");
          resolve(null);
        }
      },
      (error) => {
        console.error("Error fetching user data:", error);
        reject(error);
      }
    );
  });
}

export async function updateUserInFirestore(
  userId: string,
  newData: Partial<UserData>
): Promise<void> {
  const userDoc = doc(usersRef, userId);

  try {
    await setDoc(userDoc, newData, { merge: true });
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error; // You may want to handle the error appropriately in your application
  }
}

export async function deleteUserInFirestore(userId: string): Promise<void> {
  const userDoc = doc(usersRef, userId);

  try {
    await deleteDoc(userDoc);
  } catch (error) {
    console.error("Error deleting user data:", error);
    throw error; // You may want to handle the error appropriately in your application
  }
}

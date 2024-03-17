import {
  getFirestore,
  doc,
  DocumentData,
  setDoc,
  getDoc,
  deleteDoc,
  DocumentSnapshot,
} from "firebase/firestore";
import { UserData } from "./types";
import { User } from "firebase/auth";

export async function createUserInFirestore(user: User): Promise<void> {
  const firestore = getFirestore();
  const userDoc = doc(firestore, "users", user.uid);
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
  }
}

export async function fetchUserData(userId: string): Promise<UserData | null> {
  const firestore = getFirestore();
  const userDoc = doc(firestore, "users", userId);
  const userSnapshot: DocumentSnapshot<DocumentData> = await getDoc(userDoc);

  if (userSnapshot.exists()) {
    return userSnapshot.data() as UserData;
  } else {
    console.error("User data not found");
    return null;
  }
}

export async function updateUserInFirestore(
  userId: string,
  newData: Partial<UserData>
): Promise<void> {
  const firestore = getFirestore();
  const userDoc = doc(firestore, "users", userId);

  try {
    await setDoc(userDoc, newData, { merge: true });
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error; // You may want to handle the error appropriately in your application
  }
}

export async function deleteUserInFirestore(userId: string): Promise<void> {
  const firestore = getFirestore();
  const userDoc = doc(firestore, "users", userId);

  try {
    await deleteDoc(userDoc);
  } catch (error) {
    console.error("Error deleting user data:", error);
    throw error; // You may want to handle the error appropriately in your application
  }
}

import { doc, collection, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { UserData } from "@/store/storeTypes";
import { User } from "firebase/auth";
import { db } from "./firebase";
import { HomePageContent } from "@/store/storeTypes";

const usersRef = collection(db, "users");
const contentsRef = collection(db, "contents");

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
        coin: 0,
        finalCoin: 0,
        balance: 0.1,
        startTimeMine: null,
        endTimeMine: null,
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

  try {
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      return userSnapshot.data() as UserData;
    } else {
      console.log("User data not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
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

export async function fetchHomePageContent(): Promise<HomePageContent | null> {
  try {
    const homePageContentSnapshot = await getDoc(doc(contentsRef, "homepage"));
    if (homePageContentSnapshot.exists()) {
      return homePageContentSnapshot.data() as HomePageContent;
    } else {
      console.log("Document 'homepage' does not exist");
      return null;
    }
  } catch (error) {
    console.error("Error fetching homepage content:", error);
    throw error;
  }
}

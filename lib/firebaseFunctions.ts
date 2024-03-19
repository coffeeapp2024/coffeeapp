import {
  doc,
  collection,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { UserData } from "@/store/storeTypes";
import { User } from "firebase/auth";
import { db } from "./firebase";
import { HomePageContent } from "@/store/storeTypes";

const usersRef = collection(db, "users");
const contentsRef = collection(db, "contents");
const keysRef = collection(db, "keys");
// const settingsRef = collection(db, "settings");
const vouchersRef = collection(db, "vouchers");
const casesRef = collection(db, "game_random_voucher");
const levelsRef = collection(db, "levels");

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

export async function generateKeysAndSaveToFirestore(count: number) {
  const keys = [];
  try {
    for (let i = 0; i < count; i++) {
      const keyRef = doc(keysRef);
      const keyId = keyRef.id;
      await setDoc(keyRef, { key: keyId });
      keys.push(keyId);
    }
    return keys;
  } catch (error) {
    console.error("Error generating and saving keys:", error);
    throw error;
  }
}

export async function fetchKeysFromFirestore() {
  try {
    const keysSnapshot = await getDocs(keysRef);
    const keys: string[] = [];
    keysSnapshot.forEach((doc) => {
      const key = doc.id;
      keys.push(key);
    });
    return keys;
  } catch (error) {
    console.error("Error fetching keys from Firestore:", error);
    throw error;
  }
}

export async function deleteKeyFromFirestore(keyId: string) {
  try {
    await deleteDoc(doc(keysRef, keyId));
    console.log("Key deleted successfully:", keyId);
  } catch (error) {
    console.error("Error deleting key from Firestore:", error);
    throw error;
  }
}

export async function fetchVouchersFromFirestore() {
  try {
    const vouchersSnapshot = await getDocs(vouchersRef);
    const vouchers: any = [];
    vouchersSnapshot.forEach((doc) => {
      vouchers.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return vouchers;
  } catch (error) {
    console.error("Error fetching vouchers from Firestore:", error);
    throw error;
  }
}

export async function fetchCasesFromFirestore() {
  try {
    const casesSnapshot = await getDocs(casesRef);
    const cases: any[] = [];

    casesSnapshot.forEach((doc) => {
      cases.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return cases;
  } catch (error) {
    console.error("Error fetching cases from Firestore:", error);
    throw error;
  }
}

export async function fetchLevelsFromFirestore() {
  try {
    const levelsSnapshot = await getDocs(levelsRef);
    const levels: any[] = [];

    levelsSnapshot.forEach((doc) => {
      levels.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return levels;
  } catch (error) {
    console.error("Error fetching levels from Firestore:", error);
    throw error;
  }
}

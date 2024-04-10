import {
  doc,
  collection,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { UserData, PostType } from "@/store/storeTypes";
import { User } from "firebase/auth";
import { db } from "./firebase";
import {
  addDocumentsToCollection,
  uploadImageToFirebase,
} from "./firebaseUtils";

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
        balance: 0,
        fillTime: 2,
        miningSpeed: 0.1,
        storageLevel: 1,
        fireplaceLevel: 1,
        startTimeMine: null,
        endTimeMine: null,
        inStorage: null,
        collection: null,
        voucherIdList: [],
        LikedEventImageIdList: [],
        LikedCheckinImageIdList: [],
      };

      await setDoc(userDoc, userData);
      console.log("User created successfully");
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

export async function updateUserInFirestore(
  userId: string,
  newData: Partial<UserData>
): Promise<void> {
  const userDoc = doc(usersRef, userId);

  try {
    await setDoc(userDoc, newData, { merge: true });
    console.log("User data updated successfully");
  } catch (error) {
    console.error("Error updating user data:", error);
    throw error; // You may want to handle the error appropriately in your application
  }
}

export async function generateKeysAndSaveToFirestore(count: number) {
  const keys = [];
  for (let i = 0; i < count; i++) {
    const keyId = doc(collection(db, "keys ")).id;
    const createdAt = new Date().toISOString();
    const newKey = { key: keyId, createdAt };
    await addDocumentsToCollection("keys", [newKey]);
    keys.push(newKey);
  }
  return keys;
}

export async function uploadImageToFirebaseAndAddToCollection(
  file: File,
  userId: string,
  userEmail: string,
  collectionName: string
): Promise<PostType> {
  try {
    // Upload the image to Firebase Storage
    const imageURL = await uploadImageToFirebase(file, collectionName);

    // Create a new document in the specified collection
    const docRef = await addDoc(collection(db, collectionName), {
      userEmail: userEmail,
      userId: userId,
      imageURL: imageURL,
      likedNumber: 0,
    });

    // Return the newly created document
    return {
      id: docRef.id,
      userEmail: userEmail,
      userId: userId,
      imageURL: imageURL,
      likedNumber: 0,
    };
  } catch (error) {
    console.error("Error uploading image and adding to collection:", error);
    throw error;
  }
}

export async function updateLikedNumberInFirestore(
  id: string,
  likedNumber: number,
  collectionName: string
): Promise<void> {
  try {
    if (!id) {
      console.error("Error updating liked number: ID is empty");
      return;
    }
    const postCollection = doc(collection(db, collectionName), id);
    await updateDoc(postCollection, {
      likedNumber: likedNumber,
    });
    console.log("Liked number updated successfully.");
  } catch (error) {
    console.error("Error updating liked number:", error);
    throw error; // Propagate the error if necessary
  }
}

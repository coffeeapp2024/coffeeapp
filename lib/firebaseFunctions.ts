import {
  doc,
  collection,
  setDoc,
  getDoc,
  onSnapshot,
  Unsubscribe,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { UserData, PostType } from "@/store/storeTypes";
import { User } from "firebase/auth";
import { db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDocumentsToCollection } from "./firebaseUtils";

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
        coin: 0,
        balance: 0.1,
        balanceLevel: 1,
        level: 1,
        miningHourPerQrCodeLevel: 1,
        speechMineLevel: 1,
        collection: null,
        startTimeMine: null,
        endTimeMine: null,
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

export function listenForVoucherIdListChanges(
  userId: string,
  callback: (voucherIdList: string[]) => void
): Unsubscribe {
  const userDoc = doc(usersRef, userId);

  try {
    // Use onSnapshot to listen for real-time updates to the document
    const unsubscribe = onSnapshot(userDoc, (snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.data() as UserData;
        // Get the current voucherIdList
        const voucherIdList = userData.voucherIdList || [];
        // Invoke the callback with the current voucherIdList
        callback(voucherIdList);
      } else {
        console.log("User data not found");
        // Handle the situation when user data doesn't exist
      }
    });

    // Return the unsubscribe function
    return unsubscribe;
  } catch (error) {
    console.error("Error listening for voucherIdList changes:", error);
    throw error;
  }
}

export async function uploadImageToFirebase(
  file: File,
  folder: string
): Promise<string> {
  try {
    // Create a storage reference with a unique name within the specified folder
    const storageRef = ref(storage, `${folder}/${file.name}`);

    // Upload the file to Firebase Storage
    const snapshot = await uploadBytesResumable(storageRef, file);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(snapshot.ref);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image to Firebase Storage:", error);
    throw error;
  }
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

export async function deleteVoucherIdFromUser(
  userId: string,
  voucherId: string,
  index: number
): Promise<void> {
  try {
    // Create a reference to the user document
    const userDoc = doc(usersRef, userId);

    // Get the user data
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      // Extract the voucherIdList from the user data
      const userData = userSnapshot.data() as UserData;
      let { voucherIdList } = userData;

      // Check if the voucherIdList exists and the index is within bounds
      if (!voucherIdList || index >= voucherIdList.length) {
        throw new Error("Invalid index or missing voucherIdList");
      }

      // Remove the voucher ID at the specified index
      voucherIdList.splice(index, 1);

      // Update the user document with the modified voucherIdList
      await updateUserInFirestore(userId, { voucherIdList });
      console.log(
        `Voucher ID ${voucherId} deleted successfully from user ${userId}`
      );
    } else {
      console.log(`User ${userId} not found`);
    }
  } catch (error) {
    console.error("Error deleting voucher ID from user:", error);
    throw error;
  }
}

import {
  doc,
  collection,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
  onSnapshot,
  Unsubscribe,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { UserData, HomePageContent, PostImage } from "@/store/storeTypes";
import { User } from "firebase/auth";
import { db, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const usersRef = collection(db, "users");
const contentsRef = collection(db, "contents");
const keysRef = collection(db, "keys");
// const settingsRef = collection(db, "settings");
const vouchersRef = collection(db, "vouchers");
const casesRef = collection(db, "game_random_voucher");
const levelsRef = collection(db, "levels");
const checkinImagesRef = collection(db, "checkin_images");

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
        startTimeMine: null,
        endTimeMine: null,
        voucherIdList: [],
        LikedCheckinImageIdList: [],
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

export async function uploadImageToFirebaseAndAddToCheckinImages(
  file: File,
  userId: string,
  userEmail: string
): Promise<PostImage> {
  try {
    // Upload the image to Firebase Storage
    const imageURL = await uploadImageToFirebase(file, "checkin_images");

    // Create a new document in checkin_images collection
    const checkinImage: any = {
      userEmail: userEmail,
      userId: userId,
      imageURL: imageURL,
      likedNumber: null,
    };

    // Add the checkin image to Firestore collection
    const docRef = await addDoc(checkinImagesRef, checkinImage);

    // Update the checkinImage object with the generated document ID
    checkinImage.id = docRef.id;

    return checkinImage;
  } catch (error) {
    console.error("Error uploading image and adding to checkin_images:", error);
    throw error;
  }
}

export async function updateLikedNumberInFirestore(
  id: string,
  likedNumber: number
): Promise<void> {
  try {
    if (!id) {
      console.error("Error updating liked number: ID is empty");
      return;
    }
    const checkinRef = doc(checkinImagesRef, id);
    await updateDoc(checkinRef, {
      likedNumber: likedNumber,
    });
    console.log("Liked number updated successfully.");
  } catch (error) {
    console.error("Error updating liked number:", error);
    throw error; // Propagate the error if necessary
  }
}

export async function getAllCheckinImages(): Promise<PostImage[]> {
  try {
    const querySnapshot = await getDocs(checkinImagesRef);
    const checkinImages: PostImage[] = [];

    querySnapshot.forEach((doc) => {
      const checkinImage = {
        id: doc.id,
        ...doc.data(),
      } as PostImage;
      checkinImages.push(checkinImage);
    });

    return checkinImages;
  } catch (error) {
    console.error("Error fetching checkin images:", error);
    throw error;
  }
}

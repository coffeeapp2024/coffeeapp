import {
  getDocumentByKeyCondition,
  updateDocumentByKeyCondition,
} from "@/lib/firebaseUtils";
import { CartItem, UserData } from "@/store/zustand";
import { toast } from "sonner";

export const discardProductById = <T extends { id: string }>(
  productList: T[],
  productId: string
): T[] => {
  const updatedProductList = productList.filter(
    (product) => product.id !== productId
  );
  return updatedProductList;
};

export const getProductById = <T extends { id: string }>(
  productList: T[],
  productId: string
): T | undefined => {
  return productList.find((product) => product.id === productId);
};

export async function removeProductAndUpdateUser(
  userData: UserData,
  setUserData: (userData: UserData | null) => void,
  productId: string
) {
  const updatedUserCollection = discardProductById(
    userData.collection,
    productId
  );

  const updatedUserData: UserData = {
    ...userData,
    collection: updatedUserCollection,
  };
  setUserData(updatedUserData);

  await updateDocumentByKeyCondition(
    "users",
    "email",
    userData.email,
    updatedUserData
  );
  await toast.success("Your gift has been successfully sent to your friend.");
}

export const addProductToUserByEmail = async (
  userEmail: string,
  product: CartItem
) => {
  try {
    // Retrieve user data based on email
    const userData = (await getDocumentByKeyCondition(
      "users",
      "email",
      userEmail
    )) as UserData;

    // Check if user data exists
    if (!userData) {
      toast.error("User not found!");
      return false;
    }
    // Create a new collection with the added product
    const updatedUserCollection = [...userData.collection, product];

    // Create updated user data with the new collection
    const updatedUserData: UserData = {
      ...userData,
      collection: updatedUserCollection,
    };

    // Update the Firestore document
    await updateDocumentByKeyCondition(
      "users",
      "email",
      userEmail,
      updatedUserData
    );

    return true;
  } catch (error) {
    console.error("Error adding product to user:", error);
    // Handle error gracefully, e.g., show a toast/notification to the user
  }
};

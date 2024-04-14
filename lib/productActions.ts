import { updateDocumentByKeyCondition } from "@/lib/firebaseUtils";
import { UserData } from "@/store/zustand";

export const removeProduct = <T extends { id: string }>(
  productList: T[],
  productId: string
): T[] => {
  // Lọc ra các sản phẩm khác với productId được chỉ định
  const updatedProductList = productList.filter(
    (product) => product.id !== productId
  );
  return updatedProductList;
};

export async function handleRemoveProduct(
  userData: UserData,
  setUserData: React.Dispatch<React.SetStateAction<UserData>>,
  productId: string
) {
  const updatedUserCollection = removeProduct(userData.collection, productId);

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
}

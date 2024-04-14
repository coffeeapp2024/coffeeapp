import { Product } from "@/store/storeTypes";
import { updateDocumentByKeyCondition } from "./firebaseUtils";
import { Topping, UserData } from "@/store/zustand";

export function calcBalanceInStorage(userData: UserData): number | null {
  const { miningSpeed, inStorage } = userData;
  const { timeAt, balance } = inStorage ?? {};
  const now = new Date();

  const startDate = timeAt ? new Date(timeAt) : null;

  if (startDate && balance !== undefined && miningSpeed && now > startDate) {
    const timeDiffSeconds = (now.getTime() - startDate.getTime()) / 1000;
    const balanceInStorage = balance + miningSpeed * (timeDiffSeconds / 3600);

    return parseFloat(balanceInStorage.toFixed(6));
  }

  return null;
}

export function calcFinalBalanceInStorage(userData: UserData): number | null {
  const { miningSpeed, inStorage, endTimeMine } = userData;
  const { timeAt, balance } = inStorage ?? {};
  const endDate = endTimeMine ? new Date(endTimeMine) : null;
  const startDate = timeAt ? new Date(timeAt) : null;

  if (
    startDate &&
    endDate &&
    balance !== undefined &&
    miningSpeed &&
    endDate > startDate
  ) {
    const timeDiffSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
    const balanceInStorage = balance + miningSpeed * (timeDiffSeconds / 3600);

    return parseFloat(balanceInStorage.toFixed(6));
  }

  return null;
}

export async function updateUserDataAfterPurchase(
  userData: UserData,
  setUserData: (userData: UserData | null) => void,
  price: number,
  updatedFields: Partial<UserData>
): Promise<UserData | null> {
  if (userData.balance < price) {
    throw new Error("Not enough min point");
  }

  const updatedBalance = userData.balance - price;

  const updatedUserData: UserData = {
    ...userData,
    balance: updatedBalance,
    ...updatedFields,
  };

  await updateDocumentByKeyCondition(
    "users",
    "email",
    updatedUserData.email,
    updatedUserData
  );

  setUserData(updatedUserData);

  console.log("Updated user data after purchase:", updatedUserData);
  return updatedUserData;
}

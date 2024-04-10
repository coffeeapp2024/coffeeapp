import { UserData } from "@/store/storeTypes";
import { updateDocumentByKeyCondition } from "./firebaseUtils";

export function calcBalanceInStorage(userData: UserData): number {
  const { miningSpeed, inStorage } = userData;
  const now = new Date();
  const startDate = inStorage?.timeAt ? new Date(inStorage?.timeAt) : null;

  if (startDate && inStorage?.balance && miningSpeed && now > startDate) {
    const timeDiffSeconds = (now.getTime() - startDate.getTime()) / 1000;
    const balanceInStorage =
      inStorage?.balance + miningSpeed * (timeDiffSeconds / 3600);

    return parseFloat(balanceInStorage.toFixed(6));
  }

  return 0;
}

export async function updateUserDataAfterPurchase(
  userData: UserData,
  setUserData: (userData: UserData | null) => void,
  price: number,
  updates: { key: string; value: any }[]
): Promise<UserData | null> {
  if (userData.balance < price) {
    throw new Error("Not enough min point");
  }

  const updatedBalance = userData.balance - price;

  const updatedUserData: UserData = {
    ...userData,
    balance: updatedBalance,
  };

  // Apply all updates
  updates.forEach(({ key, value }) => {
    updatedUserData[key] = value;
  });

  // Check if userData.startTimeMine exists before updating updatedUserData
  if (userData.startTimeMine) {
    updatedUserData.startTimeMine = new Date().toISOString();
  }

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

import { UserData } from "@/store/storeTypes";
import { toast } from "sonner";
import {
  updateDocumentByKeyCondition,
  updateDocumentInCollection,
} from "./firebaseUtils";
import { StorageItem, useUserDataStore } from "@/store/zustand";

export function updateCurrentCoin(
  balancePerHour: number,
  currentCoin: number,
  endTime: string | null | undefined
): number | null {
  const now = new Date();
  const endDate = endTime ? new Date(endTime) : null;

  if (endDate && now < endDate) {
    const balancePerSecond = balancePerHour / 3600;
    const updatedCoin = currentCoin + balancePerSecond;
    return updatedCoin;
  }

  return currentCoin;
}

export function calculateInitialCurrentCoin(
  balancePerHour: number,
  coin: number,
  startTime: string | null | undefined
) {
  const now = new Date();
  const startDate = startTime ? new Date(startTime) : null;

  if (startDate && balancePerHour && now > startDate) {
    const timeDiffSeconds = (now.getTime() - startDate.getTime()) / 1000;
    const initialCoin = coin + balancePerHour * (timeDiffSeconds / 3600);
    return parseFloat(initialCoin.toFixed(5));
  }

  return coin;
}

export function calculateFinalCoin(
  balancePerHour: number | null,
  startTime: string | null,
  endTime: string | null,
  coin: number
): number {
  if (!startTime || !endTime || !balancePerHour || startTime >= endTime) {
    return 0;
  }

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const timeDiffMillis = endDate.getTime() - startDate.getTime();
  const timeDiffHours = timeDiffMillis / (1000 * 60 * 60); // Convert milliseconds to hours
  const accumulatedCoin = coin + balancePerHour * timeDiffHours;
  return parseFloat(accumulatedCoin.toFixed(5));
}

export const updateMineTimes = async (userData: UserData, mineHour: number) => {
  const millisecondsPerHour = 60 * 60 * 1000;
  const mineDurationInMillis = mineHour * millisecondsPerHour;

  const { balance, coin, startTimeMine, endTimeMine } = userData;
  if (!balance || !coin) {
    return;
  }

  const now = new Date();
  const endDate = endTimeMine ? new Date(endTimeMine) : null;

  const newEndTimeMine =
    endDate && endDate > now
      ? new Date(endDate.getTime() + mineDurationInMillis).toISOString()
      : new Date(Date.now() + mineDurationInMillis).toISOString();

  const currentCoin = await calculateInitialCurrentCoin(
    balance,
    coin,
    startTimeMine
  );

  const newUserData = {
    ...userData,
    coin: currentCoin,
    startTimeMine: now.toISOString(),
    endTimeMine: newEndTimeMine,
  };

  return newUserData;
};

export function calcInitialCoin(userData: UserData): number {
  const { balance, coin, startTimeMine } = userData;
  const now = new Date();
  const startDate = startTimeMine ? new Date(startTimeMine) : null;

  if (startDate && balance && now > startDate) {
    const timeDiffSeconds = (now.getTime() - startDate.getTime()) / 1000;
    const initialCoin = coin + balance * (timeDiffSeconds / 3600);
    return parseFloat(initialCoin.toFixed(5));
  }

  return coin;
}

export async function updateUserDataAfterPurchase(
  userData: UserData,
  setUserData: (userData: UserData | null) => void,
  price: number,
  updates: { key: string; value: any }[]
): Promise<UserData | null> {
  const currentCoin = calcInitialCoin(userData);
  if (currentCoin < price) {
    throw new Error("Not enough min point");
  }

  const updatedCoin = currentCoin - price;

  const updatedUserData: UserData = {
    ...userData,
    coin: updatedCoin,
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

export function findUserMiningHourPerQrCode(
  storages: StorageItem[],
  userStorageLevel: number
): number | undefined {
  // Use the find method to search for the storage with the matching level
  return storages.find((storage) => storage.level === userStorageLevel)
    ?.miningHourPerQrCode;
}

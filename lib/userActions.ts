import { Account, Product } from "@/store/storeTypes";
import { getDocumentById, updateDocumentByKeyCondition } from "./firebaseUtils";
import { Topping, UserData } from "@/store/zustand";
import { auth } from "@/lib/firebase";

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

export const fetchUserDataAndSetRole = async (
  setUserData: any,
  setUserId: any,
  setRole: any
) => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (user && user.email) {
      try {
        const fetchedUserData = (await getDocumentById(
          "users",
          user.uid
        )) as UserData;

        // Fetch admin accounts
        const fetchedAccounts = (await getDocumentById(
          "admin",
          "accounts"
        )) as Account;

        // Determine user role based on fetched accounts data
        const { staff, manager, testing } = fetchedAccounts;
        const role = testing
          ? "manager"
          : staff?.includes(user.email)
          ? "staff"
          : manager?.includes(user.email)
          ? "manager"
          : null;
        console.log("User role:", role);

        // Set user role and ID
        setRole(role);
        setUserId(user.uid);

        // Add 100 min to balance if in testing mode
        if (testing && fetchedUserData) {
          fetchedUserData.balance += 100;
          console.log("Testing Mode! +100 min");
        }

        // Set user data
        console.log("Fetched user data:", fetchedUserData);
        setUserData(fetchedUserData);
        console.log("Login successfully");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    } else {
      setUserData(null);
    }
  });

  return () => unsubscribe();
};

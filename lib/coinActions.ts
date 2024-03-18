import { fetchUserData, updateUserInFirestore } from "./firebaseFunctions";

export function updateCurrentCoin(
  balancePerHour: number,
  currentCoin: number,
  endTime: string | null
): number | null {
  const now = new Date();
  const endDate = endTime ? new Date(endTime) : null;

  if (endDate && now < endDate) {
    const balancePerSecond = balancePerHour / 3600;
    const updatedCoin = currentCoin + balancePerSecond;
    return updatedCoin;
  }

  return null;
}

export function calculateInitialCurrentCoin(
  balancePerHour: number | null,
  coin: number,
  startTime: string | null
) {
  const startDate = startTime ? new Date(startTime) : null;
  console.log("startDate:", startDate?.toISOString());

  const now = new Date();
  console.log("now:", now.toISOString());

  if (startDate && balancePerHour && now > startDate) {
    const timeDiffSeconds = (now.getTime() - startDate.getTime()) / 1000;
    const initialCoin = coin + balancePerHour * (timeDiffSeconds / 3600);
    return parseFloat(initialCoin.toFixed(5));
  }

  return 0;
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

export const updateMineTimes = async (userId: string, mineHour: number) => {
  const millisecondsPerHour = 60 * 60 * 1000;
  const mineDurationInMillis = mineHour * millisecondsPerHour;

  try {
    const fetchedUserData = await fetchUserData(userId);
    if (fetchedUserData) {
      const { balance, coin, startTimeMine, endTimeMine } = fetchedUserData;

      const now = new Date();
      const endDate = endTimeMine ? new Date(endTimeMine) : null;

      const newEndTime =
        endDate && endDate > now
          ? new Date(endDate.getTime() + mineDurationInMillis)
          : new Date(Date.now() + mineDurationInMillis);

      const newEndTimeMine = newEndTime.toISOString();

      const currentCoin = await calculateInitialCurrentCoin(
        balance,
        coin || 0,
        startTimeMine
      );

      const newFinalCoin = calculateFinalCoin(
        balance,
        now.toISOString(),
        newEndTimeMine,
        currentCoin
      );

      await updateUserInFirestore(userId, {
        coin: currentCoin,
        finalCoin: newFinalCoin,
        startTimeMine: now.toISOString(),
        endTimeMine: newEndTimeMine,
      });

      const userData = await fetchUserData(userId);

      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error updating mine times:", error);
    return null;
  }
};

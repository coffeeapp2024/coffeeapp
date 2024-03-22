import { UserData } from "@/store/storeTypes";

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
  const startDate = startTime ? new Date(startTime) : now;

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

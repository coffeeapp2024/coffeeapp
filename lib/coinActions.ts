import { DateString } from "./types";

export function updateCurrentCoin(
  balancePerHour: number,
  currentCoin: number,
  endTime: DateString
): number {
  const now = new Date();
  const endDateTime = endTime ? new Date(endTime) : null;

  if (endDateTime && now < endDateTime) {
    const balancePerSecond = balancePerHour / 3600;
    const updatedCoin = currentCoin + balancePerSecond;
    return updatedCoin;
  }

  return currentCoin;
}

export function calculateInitialCurrentCoin(
  balancePerHour: number,
  coin: number,
  startTime: DateString
): number {
  const now = new Date();
  const startDateTime = startTime ? new Date(startTime) : null;

  if (startDateTime && now > startDateTime) {
    const timeDiffSeconds = (now.getTime() - startDateTime.getTime()) / 1000;
    const initialCoin = coin + balancePerHour * (timeDiffSeconds / 3600);
    return initialCoin;
  }

  return 0;
}

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

import { DateString } from "./types";

export function calculateRemainingTimeInSeconds(
  endTime: DateString
): number | null {
  // If either start time or end time is null, return null
  if (!endTime) return null;

  // Convert start time and end time to Date objects
  const startDate = new Date();
  const endDate = new Date(endTime);

  // Calculate remaining time in milliseconds
  const remainingTimeMillis = endDate.getTime() - startDate.getTime();

  // Convert remaining time to seconds
  const remainingTimeSeconds = Math.floor(remainingTimeMillis / 1000);

  return remainingTimeSeconds;
}

export function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m ${remainingSeconds} to fill`;
}

export function calculateRemainingBalancePerSecond(
  balancePerHour: number,
  currentBalance: number,
  endTime: DateString
): number {
  if (!endTime) return currentBalance;

  const remainingTimeInSeconds = calculateRemainingTimeInSeconds(endTime);
  if (remainingTimeInSeconds === null || remainingTimeInSeconds <= 0) {
    return currentBalance;
  }

  const balancePerSecond = balancePerHour / 3600;
  const remainingBalance =
    currentBalance + remainingTimeInSeconds * balancePerSecond;

  return remainingBalance;
}

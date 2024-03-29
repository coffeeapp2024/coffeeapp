export function calculateRemainingTimeInSeconds(
  endTime: string | null
): number | null {
  // If either start time or end time is null, return null
  if (!endTime) return null;

  // Convert start time and end time to Date objects
  const startDate = new Date();

  const now = new Date();
  const endDate = new Date(endTime);
  if (endDate < now) return null;

  const remainingTimeMillis = endDate.getTime() - startDate.getTime();
  const remainingTimeSeconds = Math.floor(remainingTimeMillis / 1000);

  return remainingTimeSeconds;
}

export function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  // const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m to fill`;
}

export function calculateRemainingBalancePerSecond(
  balancePerHour: number,
  currentBalance: number,
  endTime: string | null
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

export function calculateRemainingTime(
  startTime: string,
  fillTime: number
): number | null {
  const startDate = new Date(startTime);
  const now = new Date();

  const remainingTimeMillis =
    startDate.getTime() + fillTime * (3600 * 1000) - now.getTime();

  return Math.max(remainingTimeMillis, 0);
}

export function formatMillis(seconds: number): string {
  const hours = Math.floor(seconds / (3600 * 1000));
  const minutes = Math.floor((seconds % 3600) / 60);
  // const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m to fill`;
}

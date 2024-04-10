import { StorageItem } from "@/store/zustand";

export function calculateRemainingTime(endTime: string): number | null {
  const endDate = new Date(endTime);
  const now = new Date();

  const remainingTimeSeconds = (endDate.getTime() - now.getTime()) / 1000;

  return Math.max(remainingTimeSeconds, 0);
}

export function calculateMiningProgressPercentage(
  startTime: string | null | undefined,
  endTime: string | null | undefined
): number | null {
  if (!startTime || !endTime) {
    return null;
  }

  const startDate = new Date(startTime);
  const endDate = new Date(endTime);
  const now = new Date();

  const totalTimeInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
  const elapsedTimeInSeconds = (now.getTime() - startDate.getTime()) / 1000;

  if (elapsedTimeInSeconds < 0 || elapsedTimeInSeconds > totalTimeInSeconds) {
    // Return null if start time is in the future or end time is in the past
    return null;
  }

  const progressPercentage = (elapsedTimeInSeconds / totalTimeInSeconds) * 100;
  return progressPercentage;
}

export const calculateEndTimeMine = (now: Date, fillTime: number): string => {
  const endTime = new Date(now.getTime() + fillTime * 3600 * 1000);
  return endTime.toISOString();
};

export function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  // const remainingSeconds = seconds % 60;

  return `${hours}h ${minutes}m to fill`;
}

export function getFillTimeByStorageLevel(
  storages: StorageItem[],
  userStoragelevel: number
): number | undefined {
  // Use the find method to search for the storage with the matching level
  return storages.find((storage) => storage.level === userStoragelevel)
    ?.fillTime;
}

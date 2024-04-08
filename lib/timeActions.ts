import { StorageItem } from "@/store/zustand";

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

export const calculateEndTimeMine = (now: Date, fillTime: number): string => {
  const endTime = new Date(now.getTime() + fillTime * 3600 * 1000);
  return endTime.toISOString();
};

export function formatMillis(seconds: number): string {
  const hours = Math.floor(seconds / (3600 * 1000));
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

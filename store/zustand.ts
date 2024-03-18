import { create } from "zustand";
import {
  CoinStore,
  HomePageContentStore,
  TimeStore,
  UserDataStore,
} from "./storeTypes";

export const useUserDataStore = create<UserDataStore>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
}));

export const useHomePageContentStore = create<HomePageContentStore>((set) => ({
  homePageContent: null,
  setHomePageContent: (homePageContent) => set({ homePageContent }),
}));

export const useTimeStore = create<TimeStore>((set) => ({
  remainingTimeSeconds: null,
  setRemainingTimeSeconds: (time) => set({ remainingTimeSeconds: time }),
}));

export const useCoinStore = create<CoinStore>((set) => ({
  currentCoin: null,
  setCurrentCoin: (coin) => set({ currentCoin: coin }),
}));

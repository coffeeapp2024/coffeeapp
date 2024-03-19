import { create } from "zustand";
import {
  CaseStore,
  CoinStore,
  HomePageContentStore,
  LevelStore,
  TimeStore,
  UserDataStore,
  VoucherStore,
} from "./storeTypes";

export const useUserDataStore = create<UserDataStore>((set) => ({
  userData: null,
  userId: null,
  setUserData: (userData) => set({ userData }),
  setUserId: (userId) => set({ userId }),
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

export const useVoucherStore = create<VoucherStore>((set) => ({
  vouchers: [],
  setVouchers: (vouchers) => set({ vouchers }),
}));

export const useCaseStore = create<CaseStore>((set) => ({
  cases: [],
  setCases: (cases) => set({ cases }),
  addCase: (newCase) => set((state) => ({ cases: [...state.cases, newCase] })),
}));

export const useLevelStore = create<LevelStore>((set) => ({
  levels: [],
  setLevels: (levels) => set({ levels }),
}));

import { create } from "zustand";
import {
  CaseStore,
  CheckinStore,
  CoinStore,
  HomePageContentStore,
  LevelStore,
  TimeStore,
  UserDataStore,
  VoucherStore,
} from "./storeTypes";
import {
  updateLikedNumberInFirestore,
  uploadImageToFirebaseAndAddToCheckinImages,
} from "@/lib/firebaseFunctions";

export const useUserDataStore = create<UserDataStore>((set: any) => ({
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
  vouchers: null,
  setVouchers: (vouchers) => set({ vouchers }),
}));

export const useCaseStore = create<CaseStore>((set) => ({
  cases: null,
  setCases: (cases) => set({ cases: [...cases] }),
}));

export const useLevelStore = create<LevelStore>((set) => ({
  levels: null,
  setLevels: (levels) => set({ levels }),
}));

// Import necessary dependencies and types

export const useCheckinStore = create<CheckinStore>((set) => ({
  checkins: [],
  setCheckins: (checkins) => set({ checkins }),
  addCheckin: async (file: File, userId: string, userEmail: string) => {
    try {
      const checkinImage = await uploadImageToFirebaseAndAddToCheckinImages(
        file,
        userEmail,
        userId
      );
      set((state) => ({ checkins: [...state.checkins, checkinImage] }));
    } catch (error) {
      console.error("Error adding checkin:", error);
      throw error;
    }
  },
  increaseLikedNumber: async (id: string) => {
    set((state) => {
      const updatedCheckins = state.checkins.map((image) =>
        image.id === id
          ? { ...image, likedNumber: (image.likedNumber ?? 0) + 1 }
          : image
      );

      // Update the liked number in Firestore
      const likedNumber =
        updatedCheckins.find((image) => image.id === id)?.likedNumber ?? 0;
      updateLikedNumberInFirestore(id, likedNumber);

      return { ...state, checkins: updatedCheckins };
    });
  },
  decreaseLikedNumber: async (id: string) => {
    set((state) => {
      const updatedCheckins = state.checkins.map((image) =>
        image.id === id
          ? { ...image, likedNumber: Math.max(0, (image.likedNumber ?? 0) - 1) }
          : image
      );

      // Update the liked number in Firestore
      const likedNumber = Math.max(
        0,
        updatedCheckins.find((image) => image.id === id)?.likedNumber ?? 0
      );
      updateLikedNumberInFirestore(id, likedNumber);

      return { ...state, checkins: updatedCheckins };
    });
  },
}));

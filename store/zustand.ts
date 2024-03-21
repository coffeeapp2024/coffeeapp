import { create } from "zustand";
import {
  CaseStore,
  CheckinStore,
  CoinStore,
  HomePageContentStore,
  LevelStore,
  PostImage,
  PostImageStore,
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
      console.log("addCheckin", checkinImage);
      set((state) => ({ checkins: [checkinImage, ...state.checkins] }));
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

export const usePostImageStore = create<PostImageStore>((set) => ({
  postImages: [],

  // Action to set post images
  setPostImages: (postImages: PostImage[]) => {
    set({ postImages });
  },

  // Action to add a new post image
  addPostImage: async (postImage: PostImage) => {
    set((state) => ({ postImages: [postImage, ...state.postImages] }));
  },

  // Action to increase the liked number of a post image
  increaseLikedNumber: async (id: string) => {
    set((state) => {
      const updatedPostImages = state.postImages.map((postImage) =>
        postImage.id === id
          ? { ...postImage, likedNumber: (postImage.likedNumber ?? 0) + 1 }
          : postImage
      );
      return { ...state, postImages: updatedPostImages };
    });
  },

  // Action to decrease the liked number of a post image
  decreaseLikedNumber: async (id: string) => {
    set((state) => {
      const updatedPostImages = state.postImages.map((postImage) =>
        postImage.id === id
          ? {
              ...postImage,
              likedNumber: Math.max(0, (postImage.likedNumber ?? 0) - 1),
            }
          : postImage
      );
      return { ...state, postImages: updatedPostImages };
    });
  },
}));

import { UserData } from "@/lib/types";
import { create } from "zustand";

type UserDataStore = {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
};

export const useUserDataStore = create<UserDataStore>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
}));

type HomePageContent = {
  videoURL: string;
  open: string;
  address: string;
  name: string;
};

type HomePageContentStore = {
  homePageContent: HomePageContent | null;
  setHomePageContent: (setHomePageContent: HomePageContent | null) => void;
};

export const useHomePageContentStore = create<HomePageContentStore>((set) => ({
  homePageContent: null,
  setHomePageContent: (homePageContent) => set({ homePageContent }),
}));

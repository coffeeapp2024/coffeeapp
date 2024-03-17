import { UserData } from "@/lib/types";
import { create } from "zustand";

type UserDataStore = {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
};

const useUserDataStore = create<UserDataStore>((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
}));

export default useUserDataStore;

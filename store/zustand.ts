import { create } from "zustand";
import {
  CaseStore,
  CoinStore,
  HomePageContentStore,
  LevelStore,
  PostType,
  PostStore,
  TimeStore,
  UserDataStore,
  VoucherStore,
  ProductStore,
  ProductTagStore,
  ShopStore,
  RandomVoucherStore,
  OpenQrVoucherStore,
  MinePageContentStore,
} from "./storeTypes";

export const useUserDataStore = create<UserDataStore>((set: any) => ({
  userData: null,
  userId: null,
  role: null,
  setUserData: (userData) => set({ userData }),
  setUserId: (userId) => set({ userId }),
  setRole: (role) => set({ role }),
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

function createPostStore(
  name: string,
  initialState: PostType[]
): () => PostStore {
  return create<PostStore>((set) => ({
    name: name,
    posts: initialState,
    setName: (name: string) => set({ name: name }),
    setPosts: (posts) => set({ posts }),
    addPost: async (post) => {
      set((state) => ({ posts: [post, ...state.posts] }));
    },
    setLikedNumber: async (id, liked) => {
      let newLikedNumber;
      set((state) => {
        const updatedPosts = state.posts.map((post) =>
          post.id === id
            ? {
                ...post,
                likedNumber: (post.likedNumber ?? 0) + (liked ? 1 : -1),
              }
            : post
        );
        newLikedNumber = updatedPosts.find(
          (post) => post.id === id
        )?.likedNumber;
        return { ...state, posts: updatedPosts };
      });
      return newLikedNumber ?? 0; // Return the updated liked number or default to 0
    },
  }));
}

export const useEventPostStore = createPostStore("eventImages", []);
export const useCheckinPostStore = createPostStore("checkinImages", []);

export const useProductStore = create<ProductStore>((set) => ({
  products: null,
  setProducts: (products) => set({ products }),
}));

export const useProductTagStore = create<ProductTagStore>((set) => ({
  productTags: null,
  currentTag: "all",
  setProductTags: (productTags) => set({ productTags }),
  setCurrentTag: (tag) => set({ currentTag: tag }),
}));

export const useShopStore = create<ShopStore>((set) => ({
  banner: null,
  setBanner: (banner) => set({ banner }),
}));

export const useRandomVoucherStore = create<RandomVoucherStore>((set) => ({
  randomVoucherId: null,
  open: false,
  setRandomVoucherId: (randomVoucherId) => set({ randomVoucherId }),
  setOpen: (open) => set({ open }),
}));

export const useOpenQrVoucherStore = create<OpenQrVoucherStore>((set) => ({
  voucherId: null,
  index: null,
  open: false,
  setVoucherId: (voucherId) => set({ voucherId }),
  setIndex: (index) => set({ index }),
  setOpen: (open) => set({ open }),
}));

export const useMinePageContentStore = create<MinePageContentStore>((set) => ({
  minePageContent: null,
  setMinePageContent: (minePageContent) => set({ minePageContent }),
}));

export type PaymentMethodStore = {
  usePoints: boolean;
  toggleUsePoints: () => void;
};

export const usePaymentMethodStore = create<PaymentMethodStore>((set) => ({
  usePoints: false,
  toggleUsePoints: () => set((state) => ({ usePoints: !state.usePoints })),
}));

export type StorageItem = {
  level: number;
  name: string;
  price: number;
  miningHourPerQrCode: number;
};

export type StorageStore = {
  storages: StorageItem[] | null;
  setStorages: (storages: StorageItem[]) => void;
};

export const useStorageStore = create<StorageStore>((set) => ({
  storages: null,
  setStorages: (storages) => set({ storages }),
}));

export type balanceLevel = {
  level: number;
  name: string;
  price: number;
  balance: number;
};

export type BalanceLevelStore = {
  balanceLevels: balanceLevel[] | null;
  setBalanceLevels: (balanceLevels: balanceLevel[]) => void;
};

export const useBalanceLevelStore = create<BalanceLevelStore>((set) => ({
  balanceLevels: null,
  setBalanceLevels: (balanceLevels) => set({ balanceLevels }),
}));

export type VoucherPageContent = {
  voucherBannerURL: string;
};

export type VoucherPageContentStore = {
  voucherPageContent: VoucherPageContent | null;
  setVoucherPageContent: (content: VoucherPageContent) => void;
};

export const useVoucherPageContentStore = create<VoucherPageContentStore>(
  (set) => ({
    voucherPageContent: null,
    setVoucherPageContent: (content) => set({ voucherPageContent: content }),
  })
);

export type PriceTypeStore = {
  isPriceInCoins: boolean;
  togglePriceType: () => void;
};

export const usePriceTypeStore = create<PriceTypeStore>((set) => ({
  isPriceInCoins: false,
  togglePriceType: () =>
    set((state) => ({ isPriceInCoins: !state.isPriceInCoins })),
}));

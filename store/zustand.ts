import {
  CaseStore,
  HomePageContentStore,
  PostType,
  PostStore,
  VoucherStore,
  ProductStore,
  ProductTagStore,
  ShopStore,
  RandomVoucherStore,
  OpenQrVoucherStore,
  MinePageContentStore,
  InStorage,
} from "./storeTypes";
import { create, StoreApi, UseBoundStore } from "zustand";

export type UserVoucher = {
  id: string;
  quantity: number;
};

export type UserData = {
  email: string | null;
  displayName: string | null;
  balance: number;
  fillTime: number | null;
  miningSpeed: number | null;
  storageLevel: number | null;
  fireplaceLevel: number | null;
  startTimeMine: string | null;
  endTimeMine: string | null;
  inStorage: InStorage | null;
  voucherList: UserVoucher[];
  collection: CartItem[];
  LikedEventImageIdList: string[] | null;
  LikedCheckinImageIdList: string[] | null;
  [key: string]: any;
};

export type UserDataStore = {
  userData: UserData | null;
  userId: string | null;
  role: string | null;
  setUserData: (userData: UserData | null) => void;
  setUserId: (userId: string | null) => void;
  setRole: (Role: string | null) => void;
};

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

export type TimeStore = {
  remainingTime: number | null;
  setRemainingTime: (time: number | null) => void;
};

export const useTimeStore = create<TimeStore>((set) => ({
  remainingTime: null,
  setRemainingTime: (time) => set({ remainingTime: time }),
}));

export type MiningProgressStore = {
  miningProgressPercentage: number;
  setMiningProgressPercentage: (percentage: number) => void;
};

export const useMiningProgressStore = create<MiningProgressStore>((set) => ({
  miningProgressPercentage: 100,
  setMiningProgressPercentage: (percentage) =>
    set({ miningProgressPercentage: percentage }),
}));

export type BalanceInStorageStore = {
  balanceInStorage: number | null;
  setBalanceInStorage: (balance: number | null) => void;
};

export const useBalanceInStorageStore = create<BalanceInStorageStore>(
  (set) => ({
    balanceInStorage: null,
    setBalanceInStorage: (balance) => set({ balanceInStorage: balance }),
  })
);

export type CurrentBalanceStore = {
  currentBalance: number | null;
  setCurrentBalance: (coin: number | null) => void;
};

export const useCurrentBalanceStore = create<CurrentBalanceStore>((set) => ({
  currentBalance: null,
  setCurrentBalance: (coin) => set({ currentBalance: coin }),
}));

export const useVoucherStore = create<VoucherStore>((set) => ({
  vouchers: null,
  setVouchers: (vouchers) => set({ vouchers }),
}));

export const useCaseStore = create<CaseStore>((set) => ({
  cases: null,
  setCases: (cases) => {
    const sortedCases = cases.slice().sort((a, b) => a.id - b.id);
    set({ cases: sortedCases });
  },
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
  products: [],
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
  fillTime: number;
};

export type StorageStore = {
  storages: StorageItem[] | null;
  setStorages: (storages: StorageItem[]) => void;
};

export const useStorageStore = create<StorageStore>((set) => ({
  storages: null,
  setStorages: (storages) => set({ storages }),
}));

export type fireplaceLevel = {
  level: number;
  name: string;
  price: number;
  miningSpeed: number;
};

export type FireplaceLevelStore = {
  fireplaceLevels: fireplaceLevel[] | null;
  setFireplaceLevels: (fireplaceLevels: fireplaceLevel[]) => void;
};

export const useFireplaceLevelStore = create<FireplaceLevelStore>((set) => ({
  fireplaceLevels: null,
  setFireplaceLevels: (fireplaceLevels) => set({ fireplaceLevels }),
}));

export type PriceTypeStore = {
  isPriceInPoint: boolean;
  togglePriceType: () => void;
};

export const usePriceTypeStore = create<PriceTypeStore>((set) => ({
  isPriceInPoint: true,
  togglePriceType: () =>
    set((state) => ({ isPriceInPoint: !state.isPriceInPoint })),
}));

export type Topping = {
  id: string;
  name: string;
  price: number;
  point: number;
};

export type ToppingsStore = {
  toppings: Topping[];
  setToppings: (toppings: Topping[]) => void;
};

export const useToppingsStore = create<ToppingsStore>((set) => ({
  toppings: [],
  setToppings: (toppings) => set({ toppings }),
}));

export type CartItem = {
  id: string;
  productId: string;
  sizeId: string;
  toppingIds: string[];
  quantity: number;
  totalPrice: number;
  priceType: CartType;
};
export type CartType = "cash" | "point";

type CartStoreType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  setItem: (index: number, newItem: CartItem) => void;
};

const createCartStore = (
  cartType: CartType
): UseBoundStore<StoreApi<CartStoreType>> => {
  return create<CartStoreType>((set) => ({
    cartItems: [],
    addToCart: (item) => {
      console.log(`Adding item to ${cartType} cart:`, item);
      set((state) => ({ cartItems: [...state.cartItems, item] }));
    },
    removeFromCart: (id) => {
      console.log(`Removing item with id ${id} from ${cartType} cart`);
      set((state) => ({
        cartItems: state.cartItems.filter((item) => item.id !== id),
      }));
    },
    clearCart: () => {
      console.log(`Clearing ${cartType} cart`);
      set({ cartItems: [] });
    },
    setItem: (index, newItem) => {
      console.log(
        `Setting item at index ${index} in ${cartType} cart:`,
        newItem
      );
      set((state) => {
        const updatedItems = [...state.cartItems];
        updatedItems[index] = newItem;
        return { cartItems: updatedItems };
      });
    },
  }));
};

export const useCashCartStore = createCartStore("cash");
export const usePointCartStore = createCartStore("point");

export type QrCodeStore = {
  id: string | null;
  open: boolean;
  setQrCodeId: (id: string) => void;
  setOpen: (open: boolean) => void;
};

// Tạo store
export const useQrCodeStore = create<QrCodeStore>((set) => ({
  id: null,
  open: false,
  setQrCodeId: (id) => set((state) => ({ ...state, id })),
  setOpen: (open) => set((state) => ({ ...state, open })),
}));

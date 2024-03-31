import { CartItem } from "./zustand";

export type UserVoucherInfo = {
  imgUrl: string;
  info: string;
  qrCode: string;
};

export type Size = {
  size: string;
  point: number;
  price: number;
  isDefault: boolean;
};

export type UserData = {
  email: string | null;
  displayName: string | null;
  coin: number;
  level: number | null;
  balance: number | null;
  startTimeMine: string | null;
  endTimeMine: string | null;
  voucherIdList: string[] | null;
  LikedEventImageIdList: string[] | null;
  LikedCheckinImageIdList: string[] | null;
  balanceLevel: number | null;
  miningHourPerQrCodeLevel: number | null;
  collection: CartItem[] | null;
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

export type HomePageContent = {
  videoURL: string;
  open: string;
  address: string;
  name: string;
  gallery: string[];
  eventText: string;
  eventTitle: string;
  eventPosterURL: string;
  checkinTitle: string;
};

export type HomePageContentStore = {
  homePageContent: HomePageContent | null;
  setHomePageContent: (setHomePageContent: HomePageContent | null) => void;
};

export type TimeStore = {
  remainingTimeSeconds: number | null;
  setRemainingTimeSeconds: (time: number | null) => void;
};

export type CoinStore = {
  currentCoin: number | null;
  setCurrentCoin: (coin: number | null) => void;
};

export type Voucher = {
  id: string;
  imageURL: string;
  info: string;
  name: string;
  price: number;
  category?: string;
  expiryDate?: string;
  discountPercentage?: number;
  discountAmount?: number;
  maxDiscount?: number;
  minPurchaseAmount?: number;
  posterDescription?: string;
};

export type VoucherStore = {
  vouchers: Voucher[] | null;
  setVouchers: (vouchers: Voucher[]) => void;
};

export type Case = {
  id: number;
  quantity: number;
  iconURL: string;
  price: number;
  voucherIdList: string[];
};

export type CaseStore = {
  cases: Case[] | null;
  setCases: (cases: Case[]) => void;
};

export type LevelData = {
  balance: number;
  level: number;
  timeMinePerQr: number;
  price: number;
  icon: string;
};

export type LevelStore = {
  levels: LevelData[] | null;
  setLevels: (levels: LevelData[]) => void;
};

export type PostType = {
  id: string | undefined;
  userEmail: string | null;
  userId: string | null;
  imageURL: string | null;
  likedNumber: number;
};

// Define the type for the store
export type PostStore = {
  name: string | null;
  posts: PostType[];
  setName: (name: string) => void;
  setPosts: (posts: PostType[]) => void;
  addPost: (post: PostType) => Promise<void>;
  setLikedNumber: (id: string, liked: boolean) => Promise<number>;
};

export interface CheckinStore {
  checkins: PostType[];
  setCheckins: (checkins: PostType[]) => void;
  addCheckin: (file: File, userId: string, userEmail: string) => Promise<void>;
  increaseLikedNumber: (id: string) => Promise<void>;
  decreaseLikedNumber: (id: string) => Promise<void>;
}

export type Product = {
  id: string;
  info: string;
  img: string;
  name: string;
  tags: string[];
  sizes: Size[];
  toppingIds: string[];
};

export type ProductStore = {
  products: Product[] | null;
  setProducts: (products: Product[]) => void;
};

export type ProductTag = {
  name: string;
  tag: string;
};

export type ProductTagStore = {
  productTags: ProductTag[] | null;
  currentTag: string;
  setProductTags: (productTags: ProductTag[]) => void;
  setCurrentTag: (tag: string | undefined) => void;
};

export type ShopStore = {
  banner: string | null;
  setBanner: (banner: string | null) => void;
};

export type RandomVoucherStore = {
  randomVoucherId: string | null;
  open: boolean;
  setRandomVoucherId: (randomVoucherId: string | null) => void;
  setOpen: (open: boolean) => void;
};

export type OpenQrVoucherStore = {
  voucherId: string | null;
  index: number | null;
  open: boolean;
  setOpen: (open: boolean) => void;
  setVoucherId: (voucherId: string | null) => void;
  setIndex: (Index: number | null) => void;
};

export type MinePageContent = {
  backgrounds: string[] | null;
};

export type MinePageContentStore = {
  minePageContent: MinePageContent | null;
  setMinePageContent: (minePageContent: MinePageContent) => void;
};

export type Account = {
  staff: string[];
  manager: string[];
  testing: boolean;
};

export type QrCodeType = {
  key: string;
  createdAt: string;
};

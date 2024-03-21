export type UserVoucherInfo = {
  imgUrl: string;
  info: string;
  qrCode: string;
};

export type UserData = {
  email: string | null;
  displayName: string | null;
  coin: number | null;
  balance: number | null;
  startTimeMine: string | null;
  endTimeMine: string | null;
  voucherIdList: string[] | null;
  LikedEventImageIdList: string[];
  LikedCheckinImageIdList: string[];
};

export type UserDataStore = {
  userData: UserData | null;
  userId: string | null;
  setUserData: (userData: UserData | null) => void;
  setUserId: (userId: string | null) => void;
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
  price: number;
};

export type VoucherStore = {
  vouchers: Voucher[] | null;
  setVouchers: (vouchers: Voucher[]) => void;
};

export type Case = {
  id: string;
  icon: string;
  price: number;
  voucherIdList: string[];
};

export type CaseStore = {
  cases: Case[] | null;
  setCases: (cases: Case[]) => void;
};

export type Level = {
  balance: number;
  price: number;
  icon: string;
};

export type LevelStore = {
  levels: Level[] | null;
  setLevels: (levels: Level[]) => void;
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
  img: string;
  name: string;
  price: number;
  tags: string[];
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
  currentTag: string | undefined;
  setProductTags: (productTags: ProductTag[]) => void;
  setCurrentTag: (tag: string | undefined) => void;
};

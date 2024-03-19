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
  vouchers: string[] | null;
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
  vouchers: Voucher[];
  setVouchers: (vouchers: Voucher[]) => void;
};

export type Case = {
  id: string;
  icon: string;
  price: number;
  vouchers: string[];
};

export type CaseStore = {
  cases: Case[];
  setCases: (cases: Case[]) => void;
  addCase: (newCase: Case) => void;
};

export type Level = {
  balance: number;
  price: number;
  icon: string;
};

export type LevelStore = {
  levels: Level[];
  setLevels: (levels: Level[]) => void;
};

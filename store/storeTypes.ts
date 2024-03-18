export type UserVoucherInfo = {
  imgUrl: string;
  info: string;
  qrCode: string;
};

export type UserData = {
  email: string | null;
  displayName: string | null;
  coin: number;
  balance: number;
  startTimeMine: string | null;
  endTimeMine: string | null;
  vouchers: UserVoucherInfo[] | null;
};

export type UserDataStore = {
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
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

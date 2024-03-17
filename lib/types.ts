import exp from "constants";

export type Post = {
  imgUrl: string;
  liked: number;
};

export type BoostInfo = {
  imgUrl: string;
  balance: number;
  info: string;
  price: number;
};

export type GameInfo = {
  imgUrl: string;
  price: number;
};

export type VoucherInfo = {
  imgUrl: string;
  info: string;
  price: number;
};

export type UserVoucherInfo = {
  imgUrl: string;
  info: string;
  qrCode: string;
};

export type UserInfo = {
  coin: number;
  balance: number;
  voucher: UserVoucherInfo[];
};

export type UserData = {
  email: string | null;
  displayName: string | null;
  coin: number;
  balance: number;
  lastTimeStartMine: string | null;
  endTimeMine: string | null;
  vouchers: UserVoucherInfo[] | null;
};

export type DateString = string | null | undefined;

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

import { create } from "zustand";

export type ScannedVoucher = {
  id: string;
  voucherId?: string;
  userId: string;
  scannedAt: string;
};

export type ScannedVouchersStore = {
  scannedVouchers: ScannedVoucher[];
  setScannedVouchers: (vouchers: ScannedVoucher[]) => void;
};

export const useScannedVouchersStore = create<ScannedVouchersStore>((set) => ({
  scannedVouchers: [],
  setScannedVouchers: (vouchers) => set({ scannedVouchers: vouchers }),
}));

type CartItem = {
  id: string;
  productId: string;
  sizeId: string;
  toppingIds: string[];
  quantity: number;
  totalPrice: number;
  priceType: CartType;
};

type CartType = "cash" | "point";

export type OrderItem = {
  id: string;
  userId: string;
  cartItems: CartItem[];
  createdAt: string;
};

export type OrderItemsStore = {
  orderItems: OrderItem[];
  setOrderItems: (items: OrderItem[]) => void;
};

export const useOrderItemsStore = create<OrderItemsStore>((set) => ({
  orderItems: [],
  setOrderItems: (items) => set({ orderItems: items }),
}));

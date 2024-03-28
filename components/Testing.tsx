"use client";

import React from "react";
import { useUserDataStore } from "@/store/zustand";
import {
  addDocumentsToCollection,
  resetCollectionData,
  updateKeyInDocument,
  deleteAllDocumentsInCollection,
  deleteDocumentById,
  fetchCollectionData,
  getDocumentById,
  updateDocumentInCollection,
  renameCollection,
  deleteKeyInAllDocuments,
  renameKeyInCollection,
} from "@/lib/firebaseUtils";
import MainButton from "./MainButton";

const storages = [
  {
    name: "Modular Storage",
    level: 3,
    miningHourPerQrCode: 3,
    price: 10,
  },
  {
    price: 5,
    miningHourPerQrCode: 4,
    name: "Metal Storage",
    level: 2,
  },
  {
    miningHourPerQrCode: 12,
    price: 40,
    level: 4,
  },
  {
    name: "Wooden Storage",
    miningHourPerQrCode: 2,
    level: 1,
    price: 0,
  },
  {
    name: "Titanium Storage",
    miningHourPerQrCode: 24,
    level: 5,
    price: 100,
  },
];

const balacelLevels = [
  {
    balance: 0.8,
    name: "Neon Fireplace",
    level: 4,
    price: 100,
  },
  {
    miningHourPerQr: 0.1,
    price: 5,
    name: "Wood Fireplace",
    level: 1,
  },
  {
    level: 3,
    name: "Gas Fireplace",
    balance: 0.4,
    price: 40,
  },
  {
    level: 2,
    name: "Stone Fireplace",
    price: 10,
    balance: 0.2,
  },
];

const VoucherList = [
  {
    id: "1",
    name: "30% Off Soft Drinks",
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
    info: "Get 30% off on all soft drink purchases.",
    price: 50,
    category: "Soft Drinks",
    discountPercentage: 30,
  },
  {
    id: "2",
    name: "Buy 1 Get 1 Free on Coffee",
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
    info: "Buy 1 coffee and get 1 coffee free.",
    price: 40,
    category: "Coffee",
  },
  {
    id: "3",
    name: "50% Off Fruit Juices",
    imageURL:
      "https://www.aeon.com.vn/wp-content/uploads/2021/04/momo-thequa_pb_promotion.jpg",
    info: "Get 50% off on all fruit juice purchases.",
    price: 60,
    category: "Juices",
    discountPercentage: 50,
  },
];

export const demoProductList = [
  {
    id: "7bgVfNe5KM47wXL774B4",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F11.jpg?alt=media&token=965d5c2b-3c8c-4a52-9850-1ca76460a1e3",
    name: "ice cream chocolate",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["food", "popular"],
  },
  {
    id: "ENwbJROMWFl7l2VQcacK",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink2.jpg?alt=media&token=6e53c4dc-d27b-4186-9425-e8e78f63744b",
    name: "Kopaja",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    tags: ["drink"],
  },
  {
    id: "M00pQwY9jsWIQr1h7QLo",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
    name: "Kopaja kitajo",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["drink"],
  },
  {
    id: "eHR9zkwIGjFxMJhXbQbG",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F33.jpg?alt=media&token=642c9de2-994f-4f51-84f9-7c6ebf5208a1",
    name: "drink tea tea",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["tea", "popular"],
  },
  {
    id: "fgU07XuMHhw9NcHruloO",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F44.jpg?alt=media&token=d7dab7df-6a29-4bf6-aa20-77c3f7e1f368",
    name: "lorem ipsum tea",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["popular", "tea"],
  },
  {
    id: "ipLh1oB5ssXXRLxuxsbx",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F23.jpg?alt=media&token=90ec1d34-ec62-4618-9652-d1585627e404",
    name: "laohg hadilao",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["popular", "food"],
  },
  {
    id: "jObIWIUoHsEGInmue6ZF",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
    name: "Kopi suren",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["food"],
  },
  {
    id: "lNAikJVfE4Rs0DFOdABe",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink1.jpg?alt=media&token=035f83d2-5f66-49a5-b0f2-f78611da33b1",
    name: "Kopsu mantan",
    sizes: [
      { size: "S", point: 2, price: 8 },
      { size: "M", point: 3, price: 10 },
      { size: "L", point: 4, price: 12 },
    ],
    toppingIds: ["a", "ab", "abc"],
    tags: ["drink"],
  },
];

const cases = [
  {
    id: "case3",
    price: 4,
    icon: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase3.png?alt=media&token=5aecac5e-bb4f-4a6c-8436-cfa6e5a5bc52",
    voucherIdList: ["1", "2", "3"],
  },
  {
    id: "case4",
    voucherIdList: ["1", "2", "3"],
    icon: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase4.png?alt=media&token=5bc33afa-892d-4f1c-8790-e73ab154e486",
    price: 8,
  },
  {
    id: "case1",
    voucherIdList: ["1", "2", "3"],
    price: 9,
    icon: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase1.png?alt=media&token=73ae64af-ea50-4755-94fc-9d6dd8a90e02",
  },
  {
    id: "case2",
    icon: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase2.png?alt=media&token=8e229a0a-5783-4e2c-9300-ab192d7593d7",
    voucherIdList: ["1", "2", "3"],
    price: 15,
  },
];

export const toppings = [
  { id: "a", name: "Milk", price: 5, point: 2 },
  { id: "ab", name: "Sugar", price: 3, point: 1 },
  { id: "abc", name: "Honey", price: 4, point: 2 },
];

export const item = {
  name: "Drink Tea Tea",
  size: "Large",
  sizes: [
    { size: "S", point: 2, price: 8 },
    { size: "M", point: 3, price: 10 },
    { size: "L", point: 4, price: 12 },
  ],
  toppingIds: ["a", "ab", "abc"],
  price: 42, // Giá cơ bản của mặt hàng
  point: 3, // Điểm cơ bản của mặt hàng
  toppings: [
    "toppingId1", // ID của topping 1
    "toppingId2", // ID của topping 2
    // Các topping khác...
  ],
};

function Testing() {
  const { userData } = useUserDataStore();

  const handleReset = async () => {
    // await resetCollectionData("cases", cases);
    // await updateKeyInDocument(
    //   "users",
    //   "NllhI3c86XTHdDIS0sNL9JfE3rN2",
    //   "miningHourPerQrCodeLevel",
    //   1
    // );
    // await renameCollection("game_random_voucher", "cases");
    await addDocumentsToCollection("toppings", toppings);
    // await deleteKeyInAllDocuments("balanceLevels", "icon");
    // await fetchCollectionData("balanceLevels");
    // await renameKeyInCollection("balanceLevels", "miningHourPerQr", "balance");
  };

  const showResetButton = process.env.NODE_ENV === "development";
  // const showResetButton = false;

  return (
    showResetButton && (
      <button
        className="fixed z-50 bottom-28 left-1/2 -translate-x-1/2 p-2 rounded-full bg-neutral-200"
        onClick={handleReset}
      >
        test
      </button>
    )
  );
}

export default Testing;

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
      "https://i.pinimg.com/564x/7a/01/eb/7a01eb62e67b8959fa10157f69010c54.jpg",
    info: "Get 30% off on all soft drink purchases.",
    price: 43,
    category: "Soft Drinks",
    discountPercentage: 30,
  },
  {
    id: "2",
    name: "Buy 1 Get 1 Free on Coffee",
    imageURL:
      "https://i.pinimg.com/564x/13/8a/10/138a102489a9b26ff8159c9e9adb5abf.jpg",
    info: "Buy 1 coffee and get 1 coffee free.",
    price: 22,
    category: "Coffee",
  },
  {
    id: "3",
    name: "50% Off Fruit Juices",
    imageURL:
      "https://i.pinimg.com/564x/c2/12/d1/c212d1b177ba30aba3c27581623c1cc2.jpg",
    info: "Get 50% off on all fruit juice purchases.",
    price: 14,
    category: "Juices",
    discountPercentage: 50,
  },
  {
    id: "4",
    name: "50% Off Fruit Juices",
    imageURL:
      "https://i.pinimg.com/564x/13/8a/10/138a102489a9b26ff8159c9e9adb5abf.jpg",
    info: "Get 50% off on all fruit juice purchases.",
    price: 42,
    category: "Juices",
    discountPercentage: 50,
  },
];

export const demoProductList = [
  {
    id: "ipLh1oB5ssXXRLxuxsbx",
    info: "A soothing blend of tea flavors to calm your senses.",
    sizes: [
      {
        size: "S",
        point: 2,
        price: 8,
        isDefault: true,
      },
      {
        price: 10,
        point: 3,
        size: "M",
      },
      {
        size: "L",
        point: 4,
        price: 12,
      },
    ],
    name: "Soothing Tea",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F23.jpg?alt=media&token=90ec1d34-ec62-4618-9652-d1585627e404",
    tags: ["popular", "food"],
    toppingIds: ["a", "ab", "abc"],
  },
  {
    id: "eHR9zkwIGjFxMJhXbQbG",
    name: "Aromatic Tea Blend",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F33.jpg?alt=media&token=642c9de2-994f-4f51-84f9-7c6ebf5208a1",
    toppingIds: ["a", "ab", "abc"],
    info: "An aromatic tea blend that will tantalize your taste buds.",
    tags: ["tea", "popular"],
    sizes: [
      {
        size: "S",
        point: 2,
        price: 8,
        isDefault: true,
      },
      {
        size: "M",
        point: 3,
        price: 10,
      },
      {
        size: "L",
        price: 12,
        point: 4,
      },
    ],
  },
  {
    id: "lNAikJVfE4Rs0DFOdABe",
    toppingIds: ["a", "ab", "abc"],
    tags: ["drink"],
    info: "Enjoy the rich aroma and taste of our premium coffee blend.",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink1.jpg?alt=media&token=035f83d2-5f66-49a5-b0f2-f78611da33b1",
    sizes: [
      {
        point: 2,
        size: "S",
        price: 8,
        isDefault: true,
      },
      {
        point: 3,
        price: 10,
        size: "M",
      },
      {
        size: "L",
        point: 4,
        price: 12,
      },
    ],
    name: "Premium Coffee",
  },
  {
    id: "fgU07XuMHhw9NcHruloO",
    toppingIds: ["ab", "abc"],
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F44.jpg?alt=media&token=d7dab7df-6a29-4bf6-aa20-77c3f7e1f368",
    name: "Lorem Ipsum Tea",
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend condimentum ",
    tags: ["popular", "tea"],
    sizes: [
      {
        size: "S",
        price: 8,
        point: 2,
        isDefault: true,
      },
      {
        size: "M",
        point: 3,
        price: 10,
      },
      {
        price: 12,
        size: "L",
        point: 4,
      },
    ],
  },
  {
    id: "7bgVfNe5KM47wXL774B4",
    tags: ["food", "popular"],
    toppingIds: ["a", "ab", "abc"],
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F11.jpg?alt=media&token=965d5c2b-3c8c-4a52-9850-1ca76460a1e3",
    name: "Chocolate Ice Cream",
    sizes: [
      {
        point: 2,
        size: "S",
        price: 8,
        isDefault: true,
      },
      {
        point: 3,
        size: "M",
        price: 10,
      },
      {
        size: "L",
        point: 4,
        price: 12,
      },
    ],
    info: "Indulge in the rich flavor of chocolate with our delicious ice cream.",
  },
  {
    id: "M00pQwY9jsWIQr1h7QLo",
    info: "A classic drink with a twist, perfect for any occasion.",
    toppingIds: ["a", "ab", "abc"],
    name: "Classic Drink",
    sizes: [
      {
        point: 2,
        size: "S",
        price: 8,
        isDefault: true,
      },
      {
        size: "M",
        point: 3,
        price: 10,
      },
      {
        price: 12,
        size: "L",
        point: 4,
      },
    ],
    tags: ["drink"],
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
  },
  {
    id: "ENwbJROMWFl7l2VQcacK",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink2.jpg?alt=media&token=6e53c4dc-d27b-4186-9425-e8e78f63744b",
    info: "A refreshing drink that will keep you energized throughout the day.",
    sizes: [
      {
        size: "S",
        point: 2,
        price: 8,
        isDefault: true,
      },
      {
        size: "M",
        point: 3,
        price: 10,
      },
      {
        point: 4,
        size: "L",
        price: 12,
      },
    ],
    name: "Refreshing Drink",
    tags: ["drink"],
  },
  {
    id: "jObIWIUoHsEGInmue6ZF",
    tags: ["food"],
    name: "Delightful Coffee Blend",
    toppingIds: ["a", "ab", "abc"],
    info: "A delightful coffee blend that will awaken your senses.",
    sizes: [
      {
        size: "S",
        price: 8,
        point: 2,
        isDefault: true,
      },
      {
        price: 10,
        size: "M",
        point: 3,
      },
      {
        point: 4,
        price: 12,
        size: "L",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
  },
];

const cases = [
  {
    id: 1,
    voucherIdList: ["1", "2", "3"],
    iconURL:
      "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase1.png?alt=media&token=da1533bf-dccf-4fe0-ab35-a499a6f66481",
    quantity: 3589,
    price: 9,
  },

  {
    id: 2,
    quantity: 2956,
    iconURL:
      "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase2.png?alt=media&token=d630fbef-6299-4aff-bbfe-5ab46ebaf61b",
    voucherIdList: ["1", "2", "3"],
    price: 15,
  },
  {
    id: 3,
    voucherIdList: ["1", "2", "3"],
    quantity: 1097,
    price: 4,
    iconURL:
      "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase3.png?alt=media&token=e98bb2c1-ba58-4fb2-9a66-518c95b25143",
  },
  {
    id: 4,
    iconURL:
      "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/boxs%2Fcase4.png?alt=media&token=9b1e34d2-f21e-41d2-b5fb-7723c5f50c22",
    price: 8,
    quantity: 976,
    voucherIdList: ["1", "2", "3"],
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
    // await resetCollectionData("vouchers", VoucherList);
    // await updateKeyInDocument(
    //   "users",
    //   "NllhI3c86XTHdDIS0sNL9JfE3rN2",
    //   "miningHourPerQrCodeLevel",
    //   1
    // );
    await renameCollection("balanceLevels", "fireplaceLevels");
    // await addDocumentsToCollection("toppings", toppings);
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

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
    // await renameCollection("game_random_voucher", "cases");
    // await addDocumentsToCollection("vouchers", VoucherList);
    // await deleteKeyInAllDocuments("balanceLevels", "icon");
    // await fetchCollectionData("balanceLevels");
    // await renameKeyInCollection("balanceLevels", "miningHourPerQr", "balance");
  };

  const showResetButton = process.env.NODE_ENV === "development";

  return (
    showResetButton && (
      <button
        className="fixed z-50 bottom-28 left-1/2 -translate-x-1/2 p-2 rounded-full bg-neutral-200"
        onClick={handleReset}
      >
        Test
      </button>
    )
  );
}

export default Testing;

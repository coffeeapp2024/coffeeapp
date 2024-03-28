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
    name: "Neon",
    level: 4,
    price: 100,
  },
  {
    miningHourPerQr: 0.1,
    price: 5,
    name: "Wood",
    level: 1,
  },
  {
    level: 3,
    name: "Gas",
    balance: 0.4,
    price: 40,
  },
  {
    level: 2,
    name: "Stone",
    price: 10,
    balance: 0.2,
  },
];

function Testing() {
  const { userData } = useUserDataStore();

  const handleReset = async () => {
    await resetCollectionData("balanceLevels", balacelLevels);
    // await updateKeyInDocument(
    //   "users",
    //   "NllhI3c86XTHdDIS0sNL9JfE3rN2",
    //   "miningHourPerQrCodeLevel",
    //   1
    // );
    // await renameCollection("BalanceLevels", "balanceLevels");
    // await addDocumentsToCollection("miningHourPerQrCodeLevels", storages);
    // await deleteKeyInAllDocuments("balanceLevels", "icon");

    // await fetchCollectionData("balanceLevels");

    // await renameKeyInCollection("balanceLevels", "miningHourPerQr", "balance");
  };

  const showResetButton = process.env.NODE_ENV === "development";

  return (
    showResetButton && (
      <button
        className="fixed z-50 bottom-28 left-1/2 -translate-x-1/2"
        onClick={handleReset}
      >
        <MainButton text="testing" />
      </button>
    )
  );
}

export default Testing;

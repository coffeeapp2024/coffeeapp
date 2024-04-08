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

const fireplaces = [
  {
    price: 0,
    miningSpeed: 0.1,
    level: 1,
    name: "Wood Fireplace",
  },
  {
    name: "Neon Fireplace",
    level: 4,
    miningSpeed: 0.8,
    price: 100,
  },
  {
    level: 2,
    price: 10,
    miningSpeed: 0.2,
    name: "Stone Fireplace",
  },
  {
    miningSpeed: 0.4,
    level: 3,
    name: "Gas Fireplace",
    price: 40,
  },
];

const storages = [
  {
    name: "Titanium Storage",
    level: 5,
    fillTime: 24,
    price: 100,
  },
  {
    level: 3,
    price: 10,
    fillTime: 3,
    name: "Modular Storage",
  },
  {
    price: 40,
    name: "Liquid Storage",
    level: 4,
    fillTime: 12,
  },
  {
    price: 5,
    fillTime: 4,
    name: "Metal Storage",
    level: 2,
  },
  {
    price: 0,
    name: "Wooden Storage",
    fillTime: 2,
    level: 1,
  },
];

function Testing() {
  const { userData } = useUserDataStore();

  const handleReset = async () => {
    // await resetCollectionData("storages", storages);
    // await updateKeyInDocument(
    //   "users",
    //   "NllhI3c86XTHdDIS0sNL9JfE3rN2",
    //   "miningHourPerQrCodeLevel",
    //   1
    // );
    // await renameCollection("fireplaceLevels", "fireplaces");
    // await addDocumentsToCollection("toppings", toppings);
    // await deleteKeyInAllDocuments("balanceLevels", "icon");
    // await fetchCollectionData("balanceLevels");
    // await renameKeyInCollection("fireplaces", "balance", "miningSpeed");
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

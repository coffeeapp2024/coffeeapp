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
    name: "Liquid Storage",
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
    await renameCollection(
      "miningSpeechHourLevels",
      "miningSpeechPerHourLevels"
    );
    // await addDocumentsToCollection("miningHourPerQrCodeLevels", storages);
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

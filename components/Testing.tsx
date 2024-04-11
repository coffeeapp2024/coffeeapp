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

const products = [
  {
    id: "7bgVfNe5KM47wXL774B4",
    name: "Chocolate Ice Cream",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F11.jpg?alt=media&token=965d5c2b-3c8c-4a52-9850-1ca76460a1e3",
    tags: ["food", "popular"],
    toppingIds: ["a", "ab", "abc"],
    info: "Indulge in the rich flavor of chocolate with our delicious ice cream.",
    sizes: [
      {
        id: "1",
        isDefault: true,
        price: 8,
        size: "S",
        point: 2,
      },
      {
        id: "2",
        price: 10,
        point: 3,
        size: "M",
      },
      {
        id: "3",
        point: 4,
        size: "L",
        price: 12,
      },
    ],
  },
  {
    id: "ipLh1oB5ssXXRLxuxsbx",
    info: "A soothing blend of tea flavors to calm your senses.",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F23.jpg?alt=media&token=90ec1d34-ec62-4618-9652-d1585627e404",
    toppingIds: ["a", "ab", "abc"],
    sizes: [
      {
        id: "1",
        isDefault: true,
        size: "S",
        point: 2,
        price: 8,
      },
      {
        id: "2",
        price: 10,
        point: 3,
        size: "M",
      },
      {
        id: "3",
        point: 4,
        price: 12,
        size: "L",
      },
    ],
    name: "Soothing Tea",
    tags: ["popular", "food"],
  },
  {
    id: "jObIWIUoHsEGInmue6ZF",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
    sizes: [
      {
        id: "1",
        price: 8,
        size: "S",
        point: 2,
        isDefault: true,
      },
      {
        id: "2",
        price: 10,
        size: "M",
        point: 3,
      },
      {
        id: "3",
        price: 12,
        point: 4,
        size: "L",
      },
    ],
    toppingIds: ["a", "ab", "abc"],
    name: "Delightful Coffee Blend",
    tags: ["food"],
    info: "A delightful coffee blend that will awaken your senses.",
  },
  {
    id: "fgU07XuMHhw9NcHruloO",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F44.jpg?alt=media&token=d7dab7df-6a29-4bf6-aa20-77c3f7e1f368",
    toppingIds: ["ab", "abc"],
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend condimentum ",
    sizes: [
      {
        id: "1",
        isDefault: true,
        price: 8,
        point: 2,
        size: "S",
      },
      {
        id: "2",
        price: 10,
        size: "M",
        point: 3,
      },
      {
        id: "3",
        size: "L",
        point: 4,
        price: 12,
      },
    ],
    name: "Lorem Ipsum Tea",
    tags: ["popular", "tea"],
  },
  {
    id: "M00pQwY9jsWIQr1h7QLo",
    tags: ["drink"],
    sizes: [
      {
        id: "1",
        price: 8,
        size: "S",
        isDefault: true,
        point: 2,
      },
      {
        id: "2",
        price: 10,
        size: "M",
        point: 3,
      },
      {
        id: "3",
        size: "L",
        point: 4,
        price: 12,
      },
    ],
    toppingIds: ["a", "ab", "abc"],
    info: "A classic drink with a twist, perfect for any occasion.",
    name: "Classic Drink",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink3.jpg?alt=media&token=bef834d1-fc67-4e53-9dfd-750d1ef4c56a",
  },
  {
    id: "lNAikJVfE4Rs0DFOdABe",
    info: "Enjoy the rich aroma and taste of our premium coffee blend.",
    toppingIds: ["a", "ab", "abc"],
    sizes: [
      {
        id: "1",
        point: 2,
        isDefault: true,
        size: "S",
        price: 8,
      },
      {
        id: "2",
        size: "M",
        point: 3,
        price: 10,
      },
      {
        id: "3",
        price: 12,
        size: "L",
        point: 4,
      },
    ],
    tags: ["drink"],
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink1.jpg?alt=media&token=035f83d2-5f66-49a5-b0f2-f78611da33b1",
    name: "Premium Coffee",
  },
  {
    id: "ENwbJROMWFl7l2VQcacK",
    name: "Refreshing Drink",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2Fdrink2.jpg?alt=media&token=6e53c4dc-d27b-4186-9425-e8e78f63744b",
    info: "A refreshing drink that will keep you energized throughout the day.",
    sizes: [
      {
        id: "1",
        price: 8,
        isDefault: true,
        point: 2,
        size: "S",
      },
      {
        id: "2",
        point: 3,
        size: "M",
        price: 10,
      },
      {
        id: "3",
        point: 4,
        size: "L",
        price: 12,
      },
    ],
    tags: ["drink"],
  },
  {
    id: "eHR9zkwIGjFxMJhXbQbG",
    name: "Aromatic Tea Blend",
    img: "https://firebasestorage.googleapis.com/v0/b/coffee-coin-app.appspot.com/o/products%2F33.jpg?alt=media&token=642c9de2-994f-4f51-84f9-7c6ebf5208a1",
    info: "An aromatic tea blend that will tantalize your taste buds.",
    tags: ["tea", "popular"],
    toppingIds: ["a", "ab", "abc"],
    sizes: [
      {
        id: "1",
        point: 2,
        isDefault: true,
        size: "S",
        price: 8,
      },
      {
        id: "2",
        point: 3,
        size: "M",
        price: 10,
      },
      {
        id: "3",
        point: 4,
        size: "L",
        price: 12,
      },
    ],
  },
];

function Testing() {
  const { userData } = useUserDataStore();

  const handleReset = async () => {
    await resetCollectionData("storages", products);
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

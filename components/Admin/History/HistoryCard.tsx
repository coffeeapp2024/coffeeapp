import { getKeyValue } from "@/lib/firebaseUtils";
import { getProductDetails2 } from "@/lib/productActions";
import { OrderItem } from "@/store/admin";
import { useProductStore, useToppingsStore } from "@/store/zustand";
import React, { useEffect, useState } from "react";
import ScannedCard from "./ScannedCard";

function HistoryCard({ orderItem }: { orderItem: OrderItem }) {
  const { products } = useProductStore();
  const { toppings } = useToppingsStore();

  const { cartItems, createdAt, userId } = orderItem;
  const { imageURL, name, details } = getProductDetails2(
    products,
    toppings,
    cartItems[0]
  );

  return (
    <ScannedCard
      imageURL={imageURL}
      title={name || ""}
      details={details}
      createdAt={createdAt}
      userId={userId}
    />
  );
}

export default HistoryCard;

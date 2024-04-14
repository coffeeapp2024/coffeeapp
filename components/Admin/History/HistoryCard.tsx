import { getSelectedProductDetails } from "@/lib/productActions";
import { formatISOStringToTimeAndDate } from "@/lib/timeActions";
import { OrderItem } from "@/store/admin";
import { useProductStore, useToppingsStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";

function HistoryCard({ orderItem }: { orderItem: OrderItem }) {
  const { products } = useProductStore();
  const { toppings } = useToppingsStore();

  const { cartItems, createdAt, userId } = orderItem;

  const { quantity, toppingIds, productId, sizeId } = cartItems[0];

  const { selectedProduct, selectedSizeName, selectedToppingNames } =
    getSelectedProductDetails(
      products,
      toppings,
      productId,
      sizeId,
      toppingIds
    );

  const { img, name } = selectedProduct ?? {};

  const details = [
    `size: ${selectedSizeName}`,
    `add Ins: ${selectedToppingNames}`,
    `quantity: ${quantity}`,
  ];

  const formattedCreateAt = formatISOStringToTimeAndDate(createdAt);

  return (
    <div className="relative bg-white h-32 py-2 pl-2 pr-4 rounded-2xl shadow-sm flex">
      {/* Left */}
      <div className="bg-neutral-50 h-full aspect-square rounded-xl overflow-hidden">
        {img && (
          <Image
            src={img}
            width={300}
            height={300}
            alt="Image Voucher"
            className="w-full h-full object-cover"
          />
        )}
      </div>
      {/* Right */}
      <div className="pl-3 basis-2/3">
        <div className="mb-2">
          <h3 className="font-bold">{name}</h3>
          {details.map((item, index) => (
            <p key={index} className="text-wrap text-sm">
              {item}
            </p>
          ))}
        </div>
      </div>
      <span className="absolute right-2  bottom-1 text-xs text-neutral-400">
        {formattedCreateAt}
      </span>
    </div>
  );
}

export default HistoryCard;

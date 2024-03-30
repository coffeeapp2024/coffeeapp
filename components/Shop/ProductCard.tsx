import { usePriceTypeStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";
import CoinIcon from "../Template/CoinIcon";

function ProductCard({ product }: { product: any }) {
  const { isPriceInCoins } = usePriceTypeStore();
  const { img, name, sizes } = product ?? {};

  return (
    <div className="rounded-3xl overflow-hidden shadow-sm bg-neutral-50">
      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
        {img && (
          <Image
            src={img}
            width={500}
            height={500}
            className="object-scale-down"
            alt="Product Image"
          />
        )}
      </div>
      <div className="px-3 pt-2 pb-3">
        <h3 className="font-bold text-neutral-600 text-sm truncate">{name}</h3>

        <span className="font-bold text-neutral-800">
          {isPriceInCoins ? (
            <span className="flex items-center text-base">
              <CoinIcon classname="w-4 h-4 -ml-[1px]" />
              {sizes[0].point}
            </span>
          ) : (
            <>{sizes[0].price}k</>
          )}
        </span>
      </div>
    </div>
  );
}

export default ProductCard;

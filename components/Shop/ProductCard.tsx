import { Product } from "@/store/storeTypes";
import Image from "next/image";
import React from "react";

function ProductCard({ product }: { product: Product }) {
  const { img, name, price } = product ?? {};

  return (
    <div className="rounded-3xl overflow-hidden shadow-md bg-neutral-50">
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
        <span className="font-bold text-sm text-neutral-800">{price}k</span>
      </div>
    </div>
  );
}

export default ProductCard;

import SecondaryButton from "@/components/Template/SecondaryButton";
import { CartItem, useQrCodeStore, useUserDataStore } from "@/store/zustand";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

function UserItemCard({ item, index }: { item: CartItem; index: number }) {
  const { setOpen, setQrCodeId } = useQrCodeStore();
  const { userId } = useUserDataStore();

  const { product, quantity, size, toppings } = item;
  const { img, name } = product;

  const handleOpenQrCode = () => {
    toast.info("Scan this product at the coffee shop to enjoy it.");

    const itemQrCodeId = `${userId}-collection-${index}`;
    setQrCodeId(itemQrCodeId);
    setOpen(true);
  };

  return (
    <div className="relative h-32 bg-white bg-opacity-70 w-full p-2 rounded-2xl flex shadow-sm">
      {/* Left */}
      <div className="bg-neutral-200 h-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={img}
          width={300}
          height={300}
          alt="Image Voucher"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right */}
      <div className="pl-3 pt-1 basis-2/3 flex flex-col justify-between flex-grow">
        <div className="mb-2">
          <h4 className="font-bold">{name}</h4>
          <p className="text-wrap text-neutral-700 text-sm font-semibold">
            {size && ` Size: ${size}`}
          </p>
          <p className="text-wrap text-neutral-700 text-sm font-semibold">
            {toppings.length > 0 && ` Add ins: ${toppings}`}
          </p>
          <p className="text-wrap text-neutral-700 text-sm font-semibold">
            Quantity: {quantity}
          </p>
        </div>
      </div>
      <SecondaryButton name="Scan QR" onClick={handleOpenQrCode} />
    </div>
  );
}

export default UserItemCard;

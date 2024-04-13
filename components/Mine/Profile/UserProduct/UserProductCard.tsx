import SecondaryButton from "@/components/Template/SecondaryButton";
import { getSelectedProductDetails } from "@/lib/userActions";
import {
  CartItem,
  useProductStore,
  useQrCodeStore,
  useToppingsStore,
  useUserDataStore,
} from "@/store/zustand";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import MoreCardPopover from "../More/MoreCardPopover";

function UserProductCard({ item }: { item: CartItem }) {
  const { products } = useProductStore();
  const { toppings } = useToppingsStore();
  const { setOpen, setQrCodeId } = useQrCodeStore();
  const { userId } = useUserDataStore();

  const { sizeId, productId, toppingIds, quantity } = item ?? {};

  const { selectedProduct, selectedSizeName, selectedToppingNames } =
    getSelectedProductDetails(
      products,
      toppings,
      productId,
      sizeId,
      toppingIds
    );

  const { img, name } = selectedProduct ?? {};

  const handleOpenQrCode = () => {
    toast.info("Scan this product at the shop to enjoy it.");

    const itemQrCodeId = `${userId}-collection-${item.id}`;
    setQrCodeId(itemQrCodeId);
    setOpen(true);
  };

  return (
    <div className="relative h-32 bg-white bg-opacity-70 w-full p-2 rounded-2xl flex shadow-sm overflow-hidden">
      {/* Left */}
      <div className="bg-neutral-200 h-full aspect-square rounded-xl overflow-hidden">
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
      <div className="pl-3 pt-1 basis-2/3 flex flex-col justify-between flex-grow">
        <div className="mb-2">
          <h4 className="font-bold">{name}</h4>
          <p className="text-wrap text-neutral-700 text-sm font-semibold">
            {selectedSizeName && ` Size: ${selectedSizeName}`}
          </p>
          <p className="text-wrap text-neutral-700 text-sm font-semibold">
            {selectedToppingNames.length > 0 &&
              ` Add ins: ${selectedToppingNames}`}
          </p>
          <p className="text-wrap text-neutral-700 text-sm font-semibold">
            Quantity: {quantity}
          </p>
        </div>
      </div>
      <SecondaryButton name="Scan QR" onClick={handleOpenQrCode} />

      <MoreCardPopover />
    </div>
  );
}

export default UserProductCard;

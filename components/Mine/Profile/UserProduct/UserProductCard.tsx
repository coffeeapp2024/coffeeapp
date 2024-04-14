import React from "react";
import { toast } from "sonner";
import {
  CartItem,
  useCurrentUserProductStore,
  useProductStore,
  useQrCodeStore,
  useSendItemTypeStore,
  useToppingsStore,
  useUserDataStore,
} from "@/store/zustand";
import PrimaryCard from "@/components/Template/PrimaryCard";
import { getProductDetails, getProductDetails2 } from "@/lib/productActions";
import MenuCardPopover from "../Share/MenuCardPopover";

function UserProductCard({ item }: { item: CartItem }) {
  const { products } = useProductStore();
  const { toppings } = useToppingsStore();
  const { setOpen, setQrCodeId } = useQrCodeStore();
  const { userId } = useUserDataStore();
  const { setCurrentUserProduct } = useCurrentUserProductStore();
  const { setItemType } = useSendItemTypeStore();

  const { imageURL, name, details } = getProductDetails2(
    products,
    toppings,
    item
  );

  const handleOpenQrCode = () => {
    toast.info("Scan this product at the shop to enjoy it.");

    const itemQrCodeId = `${userId}-collection-${item.id}`;
    setQrCodeId(itemQrCodeId);
    setOpen(true);
  };

  const handleClickMenu = () => {
    setCurrentUserProduct(item);
    setItemType("product");
  };

  return (
    <PrimaryCard
      imageURL={imageURL}
      title={name || ""}
      details={details}
      buttonText="Scan QR"
      onButtonClick={handleOpenQrCode}
    >
      <MenuCardPopover onClick={handleClickMenu} />
    </PrimaryCard>
  );
}

export default UserProductCard;

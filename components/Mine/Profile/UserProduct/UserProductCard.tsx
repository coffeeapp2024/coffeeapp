import React from "react";
import { toast } from "sonner";
import {
  CartItem,
  useCurrentUserProductStore,
  useProductStore,
  useQrCodeStore,
  useToppingsStore,
  useUserDataStore,
} from "@/store/zustand";
import PrimaryCard from "@/components/Template/PrimaryCard";
import { getProductDetails } from "@/lib/productActions";

function UserProductCard({ item }: { item: CartItem }) {
  const { products } = useProductStore();
  const { toppings } = useToppingsStore();
  const { setOpen, setQrCodeId } = useQrCodeStore();
  const { userId } = useUserDataStore();
  const { setCurrentUserProduct } = useCurrentUserProductStore();

  const { sizeId, productId, toppingIds, quantity } = item ?? {};

  const { selectedProduct, selectedSizeName, selectedToppingNames } =
    getProductDetails(products, toppings, productId, sizeId, toppingIds);

  const { img, name } = selectedProduct ?? {};
  if (!name) return;

  const handleOpenQrCode = () => {
    toast.info("Scan this product at the shop to enjoy it.");

    const itemQrCodeId = `${userId}-collection-${item.id}`;
    setQrCodeId(itemQrCodeId);
    setOpen(true);
  };

  const details = [];
  if (selectedSizeName) details.push(`Size: ${selectedSizeName}`);
  if (selectedToppingNames.length > 0)
    details.push(`Add ins: ${selectedToppingNames.join(", ")}`);
  details.push(`Quantity: ${quantity}`);

  return (
    <PrimaryCard
      imageURL={img}
      title={name}
      details={details}
      buttonText="Scan QR"
      onButtonClick={handleOpenQrCode}
      onMenuClick={() => setCurrentUserProduct(item)}
    />
  );
}

export default UserProductCard;

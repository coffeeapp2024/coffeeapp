"use client";

import React from "react";
import {
  useOpenQrVoucherStore,
  useQrCodeStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import { toast } from "sonner";
import VoucherCardTemplate from "@/components/Template/VoucherCardTemplate";

function UserVoucherCard({
  voucherId,
  index,
}: {
  voucherId: string;
  index: number;
}) {
  const { userId } = useUserDataStore();
  const { setQrCodeId, setOpen } = useQrCodeStore();
  const { vouchers } = useVoucherStore();
  const voucher = vouchers?.find((voucher) => voucher.id === voucherId);
  if (!voucher) return;

  const { imageURL, info, name, id } = voucher;

  const handleOpenQrCode = () => {
    toast.info("Scan this voucher at the coffee shop to claim your offer.");

    const voucherQrCodeId = `${userId}-${voucherId}-${index}`;
    setOpen(true);
    setQrCodeId(voucherQrCodeId);
  };

  return (
    <VoucherCardTemplate
      {...{ imageURL, name, info }}
      nameButton="Scan QR"
      onClick={handleOpenQrCode}
    />
  );
}

export default UserVoucherCard;

"use client";

import React from "react";
import { useOpenQrVoucherStore, useVoucherStore } from "@/store/zustand";
import { toast } from "sonner";
import VoucherCardTemplate from "@/components/Template/VoucherCardTemplate";

function UserVoucherCard({
  voucherId,
  index,
}: {
  voucherId: string;
  index: number;
}) {
  const { setIndex, setVoucherId, setOpen } = useOpenQrVoucherStore();
  const { vouchers } = useVoucherStore();
  const voucher = vouchers?.find((voucher) => voucher.id === voucherId);
  if (!voucher) return;

  const { imageURL, info, name, id } = voucher;

  const handleOpenQrVoucher = () => {
    toast.info("Scan this voucher at the coffee shop to claim your offer.");

    setOpen(true);
    setIndex(index);
    setVoucherId(id);
  };

  return (
    <VoucherCardTemplate
      {...{ imageURL, name, info }}
      nameButton="Scan QR"
      onClick={() => handleOpenQrVoucher()}
    />
  );
}

export default UserVoucherCard;

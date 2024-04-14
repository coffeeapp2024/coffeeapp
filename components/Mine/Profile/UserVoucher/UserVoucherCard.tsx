"use client";

import React from "react";
import {
  UserVoucher,
  useQrCodeStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import { toast } from "sonner";
import PrimaryCard from "@/components/Template/PrimaryCard";

function UserVoucherCard({ userVoucher }: { userVoucher: UserVoucher }) {
  const { userId } = useUserDataStore();
  const { setQrCodeId, setOpen } = useQrCodeStore();
  const { vouchers } = useVoucherStore();
  const voucher = vouchers?.find((voucher) => voucher.id === userVoucher.id);
  if (!voucher) return;

  const { imageURL, info, name, id } = voucher;

  const handleOpenQrCode = () => {
    toast.info("Scan this voucher at the shop to claim your offer.");

    const voucherQrCodeId = `${userId}-voucherList-${id}`;
    setOpen(true);
    setQrCodeId(voucherQrCodeId);
  };

  return (
    <PrimaryCard
      imageURL={imageURL}
      title={name}
      details={[info, `quantity: ${userVoucher.quantity}`]}
      buttonText="Scan QR"
      onButtonClick={handleOpenQrCode}
      onMenuClick={() => {}}
    />
  );
}

export default UserVoucherCard;

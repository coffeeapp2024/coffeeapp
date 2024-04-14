"use client";

import React from "react";
import {
  UserVoucher,
  useCurrentUserVoucherStore,
  useQrCodeStore,
  useSendItemTypeStore,
  useUserDataStore,
  useVoucherStore,
} from "@/store/zustand";
import { toast } from "sonner";
import PrimaryCard from "@/components/Template/PrimaryCard";
import MenuCardPopover from "../Share/MenuCardPopover";

function UserVoucherCard({ userVoucher }: { userVoucher: UserVoucher }) {
  const { userId } = useUserDataStore();
  const { setQrCodeId, setOpen } = useQrCodeStore();
  const { setCurrentUserVoucher } = useCurrentUserVoucherStore();
  const { setItemType } = useSendItemTypeStore();

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

  const handleClickMenu = () => {
    setCurrentUserVoucher(userVoucher);
    setItemType("voucher");
  };

  const details = [info, `quantity: ${userVoucher.quantity}`];

  return (
    <PrimaryCard
      imageURL={imageURL}
      title={name}
      details={details}
      buttonText="Scan QR"
      onButtonClick={handleOpenQrCode}
    >
      <MenuCardPopover onClick={handleClickMenu} />
    </PrimaryCard>
  );
}

export default UserVoucherCard;

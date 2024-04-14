import React from "react";
import ScannedCard from "./ScannedCard";
import { ScannedVoucher } from "@/store/admin";
import { useVoucherStore } from "@/store/zustand";
import { findVoucherById } from "@/lib/voucherActions";

function ScannedVoucherCard({
  scannedVoucher,
}: {
  scannedVoucher: ScannedVoucher;
}) {
  const { vouchers } = useVoucherStore();

  const { createdAt, userId, voucherId } = scannedVoucher;
  const { imageURL, name, info } =
    findVoucherById(vouchers || [], voucherId) ?? {};

  const details = [];
  if (info) details.push(info);

  return (
    <ScannedCard
      imageURL={imageURL}
      title={name || ""}
      details={details}
      createdAt={createdAt}
      userId={userId}
    />
  );
}

export default ScannedVoucherCard;

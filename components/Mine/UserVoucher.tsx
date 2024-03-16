import type { UserVoucherInfo } from "@/lib/types";
import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CloseDialogButton from "../CloseDialogButton";

function UserVoucher({
  userVoucherInfo,
}: {
  userVoucherInfo: UserVoucherInfo;
}) {
  const { imgUrl, info, qrCode } = userVoucherInfo;

  return (
    <Dialog>
      <DialogTrigger className="bg-white shadow-lg aspect-[4/3] border-[2px] w-full rounded-3xl pt-3 px-3 relative ">
        <div className="relative h-3/4 mb-2">
          <Image
            src={imgUrl}
            fill={true}
            alt="level icon"
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="text-lg font-medium">{info}</span>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-2xl w-full min-h-96 bg-white border-none">
        <CloseDialogButton />
      </DialogContent>
    </Dialog>
  );
}

export default UserVoucher;

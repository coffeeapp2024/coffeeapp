import React from "react";
import { SheetTrigger } from "../ui/sheet";
import Image from "next/image";

function UserCardTemplate({
  imageURL,
  name,
}: {
  imageURL: string;
  name: string;
}) {
  return (
    <SheetTrigger className="relative w-full h-full px-4 py-4 flex flex-col items-center justify-center">
      <div className="w-full">
        <Image
          src={imageURL}
          width={200}
          height={200}
          alt="Voucher Image"
          className="w-full h-full object-cover"
        />
      </div>

      <span className="font-medium text-neutral-700">{name}</span>
    </SheetTrigger>
  );
}

export default UserCardTemplate;

import React from "react";
import { SheetTrigger } from "../ui/sheet";
import Image from "next/image";

function UserCardTemplate({
  imageURL,
  name,
  className,
}: {
  imageURL: string;
  name: string;
  className?: string;
}) {
  return (
    <SheetTrigger
      className={`relative w-full h-full pb-4 pt-4 px-2 flex flex-col items-center justify-between`}
    >
      <div className={`w-full h-4/5  ${className}`}>
        <Image
          src={imageURL}
          width={200}
          height={200}
          alt="Voucher Image"
          className={`w-full h-full object-scale-down`}
        />
      </div>

      <span className="font-medium text-neutral-700">{name}</span>
    </SheetTrigger>
  );
}

export default UserCardTemplate;

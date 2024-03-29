import Image from "next/image";
import React from "react";

function AppCardTemplate({
  children,
  imageURL,
  icon,
  name,
  info,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  imageURL: string;
  name: string;
  info: string;
}) {
  return (
    <div className="col-span-2 w-full aspect-square rounded-3xl bg-white border-neutral-200 border-1px shadow-sm overflow-hidden flex flex-col justify-end">
      <div className="h-full bg-neutral-50">
        <Image
          src={imageURL}
          width={500}
          height={500}
          alt="App Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full bg-neutral-100 px-3 py-2 flex justify-between items-center">
        <div className="flex gap-x-3">
          <div className="bg-neutral-300 h-14 aspect-square rounded-2xl">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-neutral-500 text-sm font-medium">{info}</p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AppCardTemplate;

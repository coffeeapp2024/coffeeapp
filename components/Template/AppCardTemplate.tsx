import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

function AppCardTemplate({
  children,
  imageURL,
  icon,
  name,
  info,
  background,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  imageURL: string;
  name: string;
  background: string;
  info: string;
}) {
  const BackgroundIcon = ["bg-violet-400", "bg-yellow-400"];

  return (
    <div className="col-span-2 w-full aspect-square rounded-3xl bg-white border-neutral-200 border-1px shadow-sm overflow-hidden flex flex-col justify-end">
      <div className="h-full bg-neutral-50">
        <Image
          src={imageURL}
          width={500}
          height={500}
          alt="App Image"
          className="object-cover w-full h-full "
        />
      </div>
      <div className="w-full bg-neutral-100 px-3 py-3 flex justify-between items-center">
        <div className="flex gap-x-3">
          <div
            className={`${background} h-12 aspect-square rounded-2xl flex items-center justify-center`}
          >
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

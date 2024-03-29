import React from "react";

export default function SecondaryButton({
  onClick,
  name,
}: {
  onClick: any;
  name: string;
}) {
  return (
    <button
      className={`absolute bottom-2 right-2 text-nowrap font-semibold px-2 py-1 text-sm rounded-primary-button border-2px border-foreground  text-foreground active:scale-[97%] transition-transform duration-75
      `}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

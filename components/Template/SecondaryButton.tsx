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
      className={`absolute bottom-2 right-2 text-nowrap font-semibold px-2 py-1 rounded-primary-button border-2px border-primary-foreground  text-primary-foreground`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

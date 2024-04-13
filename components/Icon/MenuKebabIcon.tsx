import React from "react";

function MenuKebabIcon({ className }: { className: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1_20101)">
        <rect
          x="12"
          y="12"
          width="0.01"
          height="0.01"
          stroke="currentColor"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <rect
          x="12"
          y="5"
          width="0.01"
          height="0.01"
          stroke="currentColor"
          stroke-width="3"
          stroke-linejoin="round"
        />
        <rect
          x="12"
          y="19"
          width="0.01"
          height="0.01"
          stroke="currentColor"
          stroke-width="3"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_20101">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.000915527)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default MenuKebabIcon;

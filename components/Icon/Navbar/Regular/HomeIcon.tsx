import React from "react";

function HomeIcon({ className }: { className: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1302_2)">
        <path
          d="M19 10V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V10M21 12L12 3L3 12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1302_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default HomeIcon;

import React from "react";

function ShoppingCartIcon({ className }: { className: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1_19823)">
        <path
          d="M3 2C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4V2ZM5 3L5.99705 2.9233C5.95698 2.40231 5.52254 2 5 2V3ZM21 6L21.9939 6.11043C22.0253 5.82773 21.9348 5.54503 21.7451 5.33308C21.5554 5.12113 21.2844 5 21 5V6ZM5.23077 6L4.23371 6.0767L5.23077 6ZM18.3387 15.1187L18.4099 16.1161L18.3387 15.1187ZM7.98405 15.8583L7.9128 14.8608L7.98405 15.8583ZM3 4H5V2H3V4ZM8.05529 16.8557L18.4099 16.1161L18.2674 14.1212L7.9128 14.8608L8.05529 16.8557ZM21.1778 13.455L21.9939 6.11043L20.0061 5.88957L19.19 13.2342L21.1778 13.455ZM4.00295 3.0767L4.23371 6.0767L6.22782 5.9233L5.99705 2.9233L4.00295 3.0767ZM4.23371 6.0767L4.85039 14.0935L6.8445 13.9401L6.22782 5.9233L4.23371 6.0767ZM21 5H5.23077V7H21V5ZM18.4099 16.1161C19.8537 16.013 21.018 14.8937 21.1778 13.455L19.19 13.2342C19.1368 13.7137 18.7487 14.0868 18.2674 14.1212L18.4099 16.1161ZM7.9128 14.8608C7.36404 14.9 6.88669 14.4886 6.8445 13.9401L4.85039 14.0935C4.97697 15.739 6.40903 16.9733 8.05529 16.8557L7.9128 14.8608Z"
          fill="currentColor"
        />
        <rect
          x="8.5"
          y="20.5"
          width="0.01"
          height="0.01"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
        <rect
          x="17.5"
          y="20.5"
          width="0.01"
          height="0.01"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_19823">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default ShoppingCartIcon;

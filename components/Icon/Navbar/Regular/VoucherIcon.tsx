import React from "react";

function VoucherIcon({ className }: { className: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1302_13)">
        <path
          d="M10 5H5C3.89543 5 3 5.89543 3 7V10C3.51184 10 4.02369 10.1953 4.41421 10.5858C5.19526 11.3668 5.19526 12.6332 4.41421 13.4142C4.02369 13.8047 3.51184 14 3 14V17C3 18.1046 3.89543 19 5 19H10M10 5H19C20.1046 5 21 5.89543 21 7V10C20.4882 10 19.9763 10.1953 19.5858 10.5858C18.8047 11.3668 18.8047 12.6332 19.5858 13.4142C19.9763 13.8047 20.4882 14 21 14C21 14.75 21 15.8787 21 17C21 18.1046 20.1046 19 19 19H10M10 5V19"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1302_13">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default VoucherIcon;

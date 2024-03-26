"use client";

import {
  CurrencyDollarIcon,
  HomeIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Nav() {
  const pathname = usePathname();
  const navList = [
    ["Home", "/home"],
    ["Shop", "/shop"],
    ["Mine", "/"],
    ["Voucher", "/voucher"],
    ["More", "/more"],
  ];

  const iconSize = "w-7 h-7";

  const icons = [
    <HomeIcon key={1} className={iconSize} />,
    <ShoppingCartIcon key={2} className={iconSize} />,
    <CurrencyDollarIcon key={3} className={iconSize} />,
    <TicketIcon key={4} className={iconSize} />,
    <Squares2X2Icon key={5} className={iconSize} />,
  ];

  return (
    <div className="fixed bottom-10 w-screen max-w-screen-sm z-10 shadow-sm px-2">
      <nav className="flex justify-around items-center px-2 w-fit mx-auto bg-white bg-opacity-95 rounded-[40px] border-[1px] border-neutral-300 divide-neutral-300">
        {navList.map(([title, url], index) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={index}
              className={`${
                isActive ? "scale-150" : "text-neutral-700 "
              } p-3 rounded-full transition-transform`}
            >
              {icons[index]}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeIcon from "./Icon/Navbar/Regular/HomeIcon";
import ShoppingCartIcon from "./Icon/Navbar/Regular/ShoppingCartIcon";
import VoucherIcon from "./Icon/Navbar/Regular/VoucherIcon";
import CategoryIcon from "./Icon/Navbar/Regular/CategoryIcon";
import CurrencyIcon from "./Icon/Navbar/Regular/CurrencyIcon";

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
    <ShoppingCartIcon key={2} className={"w-8 h-8"} />,
    <CurrencyIcon key={3} className={iconSize} />,
    <VoucherIcon key={4} className={"w-8 h-8"} />,
    <CategoryIcon key={5} className={iconSize} />,
  ];

  return (
    <div className="fixed bottom-10 w-screen max-w-screen-sm z-50 shadow-sm px-2">
      <nav className="flex justify-around items-center px-2 w-fit mx-auto bg-background bg-opacity-[98%] rounded-[40px] border-[1px] border-stone-200 divide-neutral-300">
        {navList.map(([title, url], index) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={index}
              className={`${
                isActive ? "text-neutral-900" : "text-neutral-500 "
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeIcon from "./Icon/Navbar/Regular/HomeIcon";
import ShoppingCartIcon from "./Icon/Navbar/Regular/ShoppingCartIcon";
import CategoryIcon from "./Icon/Navbar/Regular/CategoryIcon";
import CurrencyIcon from "./Icon/Navbar/Regular/CurrencyIcon";

function Nav() {
  const pathname = usePathname();
  const navList = [
    ["Home", "/home"],
    ["Shop", "/shop"],
    ["Wallet", "/"],
    ["More", "/more"],
  ];

  const iconSize = "w-7 h-7";

  const icons = [
    <HomeIcon key={1} className={iconSize} />,
    <ShoppingCartIcon key={2} className={"w-8 h-8"} />,
    <CurrencyIcon key={3} className={iconSize} />,
    <CategoryIcon key={5} className={iconSize} />,
  ];

  return (
    <div className="fixed z-50 bottom-0 w-full">
      <nav className=" px-2 pt-2 pb-2 w-full mx-auto flex justify-around items-center bg-background bg-opacity-90">
        {navList.map(([title, url], index) => {
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={index}
              className={`${
                isActive ? "text-neutral-900 bg-pink-300" : "text-neutral-500 "
              } flex items-center gap-x-1 p-3 rounded-full font-semibold transition-all`}
            >
              {icons[index]}
              {isActive && title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Nav;

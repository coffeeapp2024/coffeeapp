import {
  GiftIcon,
  HomeIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="fixed bottom-10 w-full max-w-screen-sm z-10 ">
      <div className="flex items-center justify-center w-fit mx-auto px-3 py-2 bg-white rounded-3xl border-[1px] border-neutral-300 divide-neutral-300  divide-x-[1px]">
        <Link href="/">
          <div className="nav-item">
            <HomeIcon className="nav-icon" />
            <span className="nav-item-name">Info</span>
          </div>
        </Link>
        <Link href="/" className="">
          <div className="nav-item">
            <GiftIcon className="nav-icon" />
            <span className="nav-item-name">Product</span>
          </div>
        </Link>
        <Link href="/">
          <div className="nav-item">
            <RocketLaunchIcon className="nav-icon" />
            <span className="nav-item-name">Boost</span>
          </div>
        </Link>
        <Link href="/">
          <div className="nav-item">
            <StarIcon className="nav-icon" />
            <span className="nav-item-name">Game</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

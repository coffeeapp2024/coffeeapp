import {
  GiftIcon,
  HomeIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="fixed bottom-10 w-full max-w-screen-sm z-10 shadow-sm">
      <div className="flex items-center justify-center w-fit mx-auto px-3 py-2 bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 divide-neutral-300  divide-x-[1px]">
        <Link href="/home">
          <div className="nav-item">
            <Image
              src="/icons/navbar/home.png"
              width={200}
              height={200}
              className="object-cover overflow-visible w-7 h-7"
              alt="Home Icon"
            />
            <span className="nav-item-name">Home</span>
          </div>
        </Link>
        <Link href="/products" className="">
          <div className="nav-item">
            <Image
              src="/icons/navbar/shop.png"
              width={200}
              height={200}
              className="object-cover overflow-visible w-7 h-7"
              alt="Shop Icon"
            />
            <span className="nav-item-name">Shop</span>
          </div>
        </Link>
        <Link href="/">
          <div className="nav-item">
            <Image
              src="/icons/navbar/mine.png"
              width={200}
              height={200}
              alt="Mine Icon"
              className="object-cover overflow-visible w-7 h-7 "
            />
            <span className="nav-item-name">Mine</span>
          </div>
        </Link>
        <Link href="/gift">
          <div className="nav-item">
            <div className="relative ">
              <Image
                src="/icons/navbar/game.png"
                width={200}
                height={200}
                className="w-7 h-7 object-cover overflow-visible"
                alt="Gift Icon"
              />
            </div>
            <span className="nav-item-name">Gift</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;

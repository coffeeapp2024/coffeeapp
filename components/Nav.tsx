import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="fixed bottom-10 w-screen max-w-screen-sm z-10 shadow-sm px-4">
      <div className="grid grid-cols-4 items-center justify-center px-3 py-2 w-fit mx-auto bg-white bg-opacity-90 rounded-3xl border-[1px] border-neutral-300 divide-neutral-300  divide-x-[1px]">
        <Link href="/home">
          <div className="nav-item">
            <Image
              src="/icons/navbar/home.png"
              width={200}
              height={200}
              className="nav-icon scale-[1.2]"
              alt="Home Icon"
            />
            <span className="nav-item-name">Home</span>
          </div>
        </Link>
        <Link href="/shop" className="">
          <div className="nav-item">
            <Image
              src="/icons/navbar/shop.png"
              width={200}
              height={200}
              className="nav-icon"
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
              className="nav-icon"
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
                className="nav-icon"
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

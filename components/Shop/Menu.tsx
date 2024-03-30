"use client";

import React, { useState } from "react";
import ProductCardList from "./ProductCardList";
import MenuNav from "./MenuNav";

function Menu() {
  return (
    <div className="px-2 mt-6">
      <div className="border-t-[1px] border-white border-opacity-40 -mx-2"></div>
      <MenuNav />
      <ProductCardList />
    </div>
  );
}

export default Menu;

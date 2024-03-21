"use client";

import React, { useState } from "react";
import ProductCardList from "./ProductCardList";
import MenuNav from "./MenuNav";

function Menu() {
  return (
    <div className="px-2 mt-6">
      <div className="border-t-[1px] -mx-2"></div>
      <MenuNav />
      <ProductCardList />
    </div>
  );
}

export default Menu;

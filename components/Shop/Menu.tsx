"use client";

import React, { useState } from "react";
import ProductCardList from "./ProductCardList";
import MenuNav from "./MenuNav";

function Menu() {
  return (
    <div className="px-2 mt-8">
      <MenuNav />
      <h2 className="font-bold text-xl ml-1 mb-2">All</h2>
      <ProductCardList />
    </div>
  );
}

export default Menu;

"use client";

import React, { useState } from "react";
import ProductCardList from "./ProductCardList";
import MenuNav from "./MenuNav";

function Menu() {
  return (
    <div className="px-2 mt-8">
      <MenuNav />
      <ProductCardList />
    </div>
  );
}

export default Menu;

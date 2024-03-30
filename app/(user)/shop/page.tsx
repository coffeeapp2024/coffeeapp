"use client";

import BannerProductPage from "@/components/Shop/BannerProductPage";
import Menu from "@/components/Shop/Menu";
import ShoppingBagDialog from "@/components/Shop/Order/ShoppingBagDialog";
import ProductDialog from "@/components/Shop/ProductDialog";
import RecommendProductCards from "@/components/Shop/RecommendProductCards";
import UseCoin from "@/components/Shop/UseCoin";
import React from "react";

function Page() {
  return (
    <div className="relative min-h-[200vh] w-full bg-neutral-100">
      <BannerProductPage />
      <RecommendProductCards />
      <Menu />
      <UseCoin />
      <ShoppingBagDialog />
      <ProductDialog />
    </div>
  );
}

export default Page;

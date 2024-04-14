import BannerProductPage from "@/components/Shop/BannerProductPage";
import Menu from "@/components/Shop/Menu";
import ShoppingBagDialog from "@/components/Shop/Order/ShoppingBagDialog";
import RecommendProductCards from "@/components/Shop/RecommendProductCards";
import UseCoin from "@/components/Shop/UseCoin";
import React from "react";

function Page() {
  return (
    <div
      style={{
        backgroundImage: 'url("/bg/main-bg.jpg")',
      }}
      className="relative pb-40 w-full bg-background"
    >
      <BannerProductPage />
      <RecommendProductCards />
      <Menu />
      <UseCoin />
      <ShoppingBagDialog />
    </div>
  );
}

export default Page;

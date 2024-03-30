import BannerProductPage from "@/components/Shop/BannerProductPage";
import Menu from "@/components/Shop/Menu";
import ShoppingBagDialog from "@/components/Shop/Order/ShoppingBagDialog";
import RecommendProductCards from "@/components/Shop/RecommendProductCards";
import UseCoin from "@/components/Shop/UseCoin";
import React from "react";

function Page() {
  return (
    <div className="relative min-h-[200vh] w-full bg-background">
      <BannerProductPage />
      <RecommendProductCards />
      <Menu />
      <UseCoin />
      <ShoppingBagDialog />
    </div>
  );
}

export default Page;

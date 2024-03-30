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
        backgroundImage:
          'url("https://i.pinimg.com/564x/cb/5c/5a/cb5c5a0ce2599d078ebd545d4bbe1a5c.jpg")',
      }}
      className="relative min-h-[200vh] w-full bg-background"
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

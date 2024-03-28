import BannerProductPage from "@/components/Shop/BannerProductPage";
import Menu from "@/components/Shop/Menu";
import RecommendProductCards from "@/components/Shop/RecommendProductCards";
import UseCoin from "@/components/Shop/UseCoin";
import React from "react";

function page() {
  return (
    <div className="relative min-h-[200vh] w-full bg-neutral-100">
      <BannerProductPage />
      <RecommendProductCards />
      <Menu />
      <UseCoin />
    </div>
  );
}

export default page;
